"use client";

import React, { useState, useEffect } from "react";
import { 
  Play, 
  RotateCcw, 
  Layers, 
  Database, 
  MessageSquare, 
  Cpu, 
  Zap, 
  ArrowRight,
  Info
} from "lucide-react";

interface NodeDetail {
  title: string;
  tech: string;
  role: string;
  detail: string;
}

const nodeDetails: Record<string, NodeDetail> = {
  client: {
    title: "💻 Client Application",
    tech: "React, Next.js, Zustand",
    role: "Giao diện và Quản lý State phía Client",
    detail: "Gửi yêu cầu khởi tạo đơn hàng qua Gateway. Quản lý trạng thái UI đồng bộ thời gian thực bằng Zustand, cập nhật trạng thái đơn hàng nhận được qua WebSockets."
  },
  orderService: {
    title: "🛒 Order Service",
    tech: "NestJS, TypeScript",
    role: "Khởi tạo đơn hàng & Outbox Transaction",
    detail: "Nhận yêu cầu, mở transaction PostgreSQL để ghi đồng thời: (1) Bản ghi Đơn hàng trạng thái PENDING, (2) Sự kiện OrderCreated vào bảng Outbox. Điều này đảm bảo tính nguyên tử (Atomicity) - không thể tạo đơn mà mất sự kiện."
  },
  postgres: {
    title: "🛢️ PostgreSQL Database",
    tech: "PostgreSQL (ACID Transaction)",
    role: "Lưu trữ Đơn hàng và Outbox Table",
    detail: "Đảm bảo tính nhất quán tuyệt đối. Sự kiện outbox được lưu trữ cục bộ trong cùng một DB, tránh mất mát dữ liệu nếu kết nối mạng tới Broker bị lỗi vào lúc ghi."
  },
  outboxWorker: {
    title: "⚡ Outbox Worker",
    tech: "Golang / NestJS",
    role: "Quét và Đảm bảo phân phát tin nhắn (At-least-once)",
    detail: "Chạy ngầm (polling hoặc lắng nghe WAL stream), đọc các dòng tin nhắn chưa gửi từ bảng Outbox, publish lên RabbitMQ, sau khi xác nhận nhận tin (Publisher Confirms) thành công mới cập nhật trạng thái đã gửi trong DB."
  },
  rabbitmq: {
    title: "✉️ RabbitMQ Broker",
    tech: "RabbitMQ (AMQP 0-9-1)",
    role: "Hàng đợi tin nhắn cậy tin",
    detail: "Quản lý exchange và queue, định tuyến sự kiện OrderCreated đến Saga Orchestrator và các dịch vụ đăng ký một cách bất đồng bộ, ổn định, chịu tải tốt."
  },
  sagaOrchestrator: {
    title: "🧠 Saga Orchestrator",
    tech: "NestJS + Redis",
    role: "Bộ điều phối Giao dịch Phân tán",
    detail: "Nhận sự kiện OrderCreated, bắt đầu quy trình Saga. Nó gọi tuần tự/song song các Service thanh toán và kho qua gRPC/RabbitMQ. Theo dõi trạng thái bằng Redis. Nếu một bước lỗi, nó kích hoạt Giao dịch Bù (Compensating Transactions) để hoàn trả trạng thái cũ."
  },
  paymentService: {
    title: "💸 Payment Service",
    tech: "Golang / NestJS",
    role: "Xử lý Thanh toán khách hàng",
    detail: "Thực hiện giao dịch trừ tiền. Nếu thành công, trả về PaymentSucceeded. Nếu thẻ hết hạn hoặc số dư không đủ, trả về PaymentFailed, kích hoạt luồng Rollback tại Saga Orchestrator."
  },
  inventoryService: {
    title: "📦 Inventory Service",
    tech: "Golang / NestJS",
    role: "Đặt trước & Quản lý Kho",
    detail: "Thực hiện giữ chỗ sản phẩm (Reserve Stock). Nếu thành công trả về StockReserved. Nếu kho hết hàng, trả về StockFailed. Hỗ trợ lệnh bù REST/gRPC (Restore Stock) để mở khóa kho nếu thanh toán sau đó thất bại."
  }
};

export default function ArchitectureVisualizer() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simStep, setSimStep] = useState<number>(0);
  const [simType, setSimType] = useState<"success" | "failure">("success");
  const [simLogs, setSimLogs] = useState<string[]>([]);

  const updateLogs = (step: number, type: "success" | "failure") => {
    const logsMap: Record<string, string[]> = {
      success: [
        "1. Client ứng dụng gửi yêu cầu đặt hàng [POST /orders]",
        "2. Order Service mở Database Transaction: Ghi Đơn hàng (Pending) & Ghi sự kiện vào bảng Outbox thành công.",
        "3. Outbox Worker phát hiện dòng tin nhắn mới, publish sự kiện sang RabbitMQ.",
        "4. RabbitMQ phân phối sự kiện OrderCreated đến Saga Orchestrator.",
        "5. Saga Orchestrator gửi lệnh yêu cầu đặt trước sản phẩm tới Inventory Service & trừ tiền tới Payment Service.",
        "6. Cả 2 dịch vụ trả về SUCCESS. Saga Orchestrator cập nhật Order thành COMPLETED. Giao dịch thành công mỹ mãn!"
      ],
      failure: [
        "1. Client ứng dụng gửi yêu cầu đặt hàng [POST /orders]",
        "2. Order Service mở Database Transaction: Ghi Đơn hàng (Pending) & Ghi sự kiện vào bảng Outbox thành công.",
        "3. Outbox Worker quét thấy sự kiện chưa gửi, đẩy sang RabbitMQ an toàn.",
        "4. RabbitMQ chuyển tiếp sự kiện OrderCreated đến Saga Orchestrator để xử lý giao dịch.",
        "5. Saga Orchestrator yêu cầu giữ kho (Thành công) và trừ tiền tại Payment Service.",
        "6. Payment Service trả về THẤT BẠI (Số dư không đủ). Kích hoạt quy trình Rollback.",
        "7. Saga Orchestrator gửi lệnh bù (Compensating) giải phóng kho đã đặt trước. Đơn hàng cập nhật thành FAILED."
      ]
    };

    const currentLogs = logsMap[type] || [];
    setSimLogs(currentLogs.slice(0, step));
  };

  // Simulation steps handler
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSimulating) {
      const stepsCount = simType === "success" ? 6 : 7;
      
      const runStep = () => {
        setSimStep((prev) => {
          const next = prev + 1;
          if (next > stepsCount) {
            setIsSimulating(false);
            return 0;
          }
          
          // Log current simulation details
          updateLogs(next, simType);
          return next;
        });
      };

      timer = setInterval(runStep, 2500);
    }

    return () => clearInterval(timer);
  }, [isSimulating, simType]);

  const startSimulation = (type: "success" | "failure") => {
    setSimType(type);
    setSimStep(1);
    setSimLogs([]);
    setIsSimulating(true);
    updateLogs(1, type);
  };

  const stopSimulation = () => {
    setIsSimulating(false);
    setSimStep(0);
    setSimLogs([]);
  };

  // Helper function to check if node is active in the current step
  const isNodeActive = (nodeId: string): boolean => {
    if (!isSimulating) return selectedNode === nodeId;
    
    switch (nodeId) {
      case "client":
        return simStep === 1;
      case "orderService":
        return simStep === 2;
      case "postgres":
        return simStep === 2;
      case "outboxWorker":
        return simStep === 3;
      case "rabbitmq":
        return simStep === 3 || simStep === 4;
      case "sagaOrchestrator":
        return simStep >= 4;
      case "paymentService":
        return simStep === 5 || simStep === 6;
      case "inventoryService":
        return simStep === 5 || (simStep === 7 && simType === "failure");
      default:
        return false;
    }
  };

  return (
    <div className="flex flex-col h-full bg-zinc-950 rounded-xl border border-zinc-800 p-6 text-left shadow-2xl relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 relative z-10">
        <div>
          <span className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/40 px-2.5 py-1 rounded-full border border-cyan-800/30">
            Advanced System Patterns
          </span>
          <h3 className="text-xl font-bold text-white mt-2">
            Transactional Outbox & Saga Playboard
          </h3>
          <p className="text-xs text-zinc-400 mt-1 max-w-lg">
            Khám phá quy trình xử lý giao dịch phân tán và nhất quán dữ liệu bất đồng bộ. Click vào các khối để phân tích stack và cấu trúc.
          </p>
        </div>

        {/* Simulators */}
        <div className="flex flex-wrap gap-2">
          {!isSimulating ? (
            <>
              <button
                onClick={() => startSimulation("success")}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-lg hover:shadow-emerald-900/20 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5" />
                Mô phỏng Thành công
              </button>
              <button
                onClick={() => startSimulation("failure")}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-all shadow-lg hover:shadow-rose-900/20 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5" />
                Mô phỏng Thất bại (Compensate)
              </button>
            </>
          ) : (
            <button
              onClick={stopSimulation}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 animate-spin" />
              Reset Mô phỏng
            </button>
          )}
        </div>
      </div>

      {/* Main Sandbox Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10 flex-1 min-h-[450px]">
        {/* SVG/Interactive Diagram - col-span 8 */}
        <div className="lg:col-span-8 border border-zinc-900/80 rounded-xl bg-zinc-950/40 p-4 flex flex-col justify-center relative min-h-[350px]">
          
          {/* Node Connections Visual Flow */}
          <div className="grid grid-cols-4 gap-6 items-center text-center">
            
            {/* Row 1: Client -> Order Service -> DB */}
            <div className="col-span-1 flex flex-col items-center">
              <button
                onClick={() => setSelectedNode("client")}
                className={`w-full max-w-[120px] aspect-square flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-bold transition-all duration-300 cursor-pointer ${
                  isNodeActive("client")
                    ? "bg-cyan-500/25 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)] text-white scale-105"
                    : "bg-zinc-900/70 border-zinc-800/80 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                }`}
              >
                <span className="text-xl mb-1.5">💻</span>
                <span>Client App</span>
                <span className="text-[8px] text-zinc-500 font-mono mt-1 font-normal">Next.js/Zustand</span>
              </button>
            </div>

            {/* Direct arrow to Order Service */}
            <div className="col-span-1 flex items-center justify-center relative">
              <div className="w-full h-[1.5px] bg-zinc-800 relative">
                {isSimulating && simStep === 1 && (
                  <div className="absolute h-1.5 w-1.5 rounded-full bg-cyan-400 top-1/2 -translate-y-1/2 animate-ping left-1/2" />
                )}
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-700 absolute right-0" />
            </div>

            <div className="col-span-1 flex flex-col items-center">
              <button
                onClick={() => setSelectedNode("orderService")}
                className={`w-full max-w-[120px] aspect-square flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-bold transition-all duration-300 cursor-pointer ${
                  isNodeActive("orderService")
                    ? "bg-indigo-500/25 border-indigo-400 shadow-[0_0_15px_rgba(129,140,248,0.4)] text-white scale-105"
                    : "bg-zinc-900/70 border-zinc-800/80 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                }`}
              >
                <Layers className="w-6 h-6 text-indigo-400 mb-1.5" />
                <span>Order Service</span>
                <span className="text-[8px] text-indigo-400 font-mono mt-1 font-normal">NestJS API</span>
              </button>
            </div>

            <div className="col-span-1 flex flex-col items-center relative">
              {/* Connection to DB */}
              <div className="absolute right-1/2 top-full h-10 w-[1.5px] bg-zinc-800 z-0">
                {isSimulating && simStep === 2 && (
                  <div className="absolute w-1.5 h-1.5 rounded-full bg-indigo-400 left-1/2 -translate-x-1/2 animate-ping top-1/2" />
                )}
              </div>
              <button
                onClick={() => setSelectedNode("postgres")}
                className={`w-full max-w-[120px] aspect-square flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-bold transition-all duration-300 cursor-pointer z-10 ${
                  isNodeActive("postgres")
                    ? "bg-emerald-500/20 border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.4)] text-white scale-105"
                    : "bg-zinc-900/70 border-zinc-800/80 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                }`}
              >
                <Database className="w-6 h-6 text-emerald-400 mb-1.5" />
                <span>Postgres DB</span>
                <span className="text-[8px] text-zinc-500 font-mono mt-0.5">Order/Outbox TB</span>
              </button>
            </div>

            {/* Row 2: Space / Outbox Worker / RabbitMQ / Space */}
            <div className="col-span-1 flex flex-col items-center">
              {/* Invisible spacer */}
            </div>

            <div className="col-span-1 flex flex-col items-center relative">
              {/* Connection from Outbox Worker up to DB */}
              <div className="absolute right-1/2 bottom-full h-10 w-[1.5px] bg-zinc-800">
                {isSimulating && simStep === 3 && (
                  <div className="absolute w-1.5 h-1.5 rounded-full bg-amber-400 left-1/2 -translate-x-1/2 animate-pulse top-1/2" />
                )}
              </div>
              <button
                onClick={() => setSelectedNode("outboxWorker")}
                className={`w-full max-w-[120px] aspect-square flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-bold transition-all duration-300 cursor-pointer ${
                  isNodeActive("outboxWorker")
                    ? "bg-amber-500/25 border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.4)] text-white scale-105"
                    : "bg-zinc-900/70 border-zinc-800/80 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                }`}
              >
                <Zap className="w-6 h-6 text-amber-400 mb-1.5 animate-pulse" />
                <span>Outbox Worker</span>
                <span className="text-[8px] text-amber-400 font-mono mt-1 font-normal">Go Daemon</span>
              </button>
            </div>

            {/* Connection line between Worker & RabbitMQ */}
            <div className="col-span-1 flex items-center justify-center relative">
              <div className="w-full h-[1.5px] bg-zinc-800">
                {isSimulating && simStep === 3 && (
                  <div className="absolute h-1.5 w-1.5 rounded-full bg-amber-400 top-1/2 -translate-y-1/2 animate-ping left-1/2" />
                )}
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-700 absolute right-0" />
            </div>

            <div className="col-span-1 flex flex-col items-center relative">
              {/* Connection down to Saga */}
              <div className="absolute right-1/2 top-full h-10 w-[1.5px] bg-zinc-800">
                {isSimulating && simStep === 4 && (
                  <div className="absolute w-1.5 h-1.5 rounded-full bg-orange-400 left-1/2 -translate-x-1/2 animate-ping top-1/2" />
                )}
              </div>
              <button
                onClick={() => setSelectedNode("rabbitmq")}
                className={`w-full max-w-[120px] aspect-square flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-bold transition-all duration-300 cursor-pointer ${
                  isNodeActive("rabbitmq")
                    ? "bg-orange-500/25 border-orange-400 shadow-[0_0_15px_rgba(251,146,60,0.4)] text-white scale-105"
                    : "bg-zinc-900/70 border-zinc-800/80 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                }`}
              >
                <MessageSquare className="w-6 h-6 text-orange-400 mb-1.5" />
                <span>RabbitMQ</span>
                <span className="text-[8px] text-orange-400 font-mono mt-1 font-normal">AMQP Queue</span>
              </button>
            </div>

            {/* Row 3: Saga Orchestrator / Payment / Inventory */}
            <div className="col-span-2 flex flex-col items-center relative">
              <button
                onClick={() => setSelectedNode("sagaOrchestrator")}
                className={`w-full max-w-[240px] p-4 rounded-xl border text-xs font-bold transition-all duration-300 cursor-pointer relative ${
                  isNodeActive("sagaOrchestrator")
                    ? "bg-purple-500/25 border-purple-400 shadow-[0_0_15px_rgba(192,132,252,0.4)] text-white scale-102"
                    : "bg-zinc-900/70 border-zinc-800/80 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                }`}
              >
                <div className="flex items-center gap-2.5 justify-center mb-1">
                  <Cpu className="w-5 h-5 text-purple-400" />
                  <span>Saga Orchestrator</span>
                </div>
                <span className="text-[9px] text-purple-400 font-mono font-normal">NestJS Microservice</span>
                
                {/* Visual state representation */}
                {isSimulating && (
                  <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-[8px] bg-purple-900 text-purple-200 border border-purple-700 font-mono font-normal">
                    {simStep <= 4 ? "Idle" : simStep === 5 ? "Running" : simStep === 6 && simType === "success" ? "Success (Committed)" : "Compensating (Rollback)"}
                  </div>
                )}
              </button>
            </div>

            {/* Path from Saga to Services */}
            <div className="col-span-1 flex flex-col gap-5 justify-center items-center relative">
              <div className="w-[1.5px] h-10 bg-zinc-800" />
              <div className="w-8 h-[1.5px] bg-zinc-800 absolute right-0" />
              {isSimulating && simStep === 5 && (
                <div className="absolute h-1.5 w-1.5 rounded-full bg-purple-400 top-1/2 -translate-y-1/2 animate-ping right-2" />
              )}
            </div>

            <div className="col-span-1 flex flex-col gap-3">
              {/* Payment Node */}
              <button
                onClick={() => setSelectedNode("paymentService")}
                className={`w-full max-w-[120px] p-2.5 rounded-lg border text-[11px] font-bold transition-all duration-300 cursor-pointer ${
                  isNodeActive("paymentService")
                    ? simStep === 6 && simType === "failure" 
                      ? "bg-rose-500/20 border-rose-500 text-rose-200" 
                      : "bg-purple-500/20 border-purple-400 text-white"
                    : "bg-zinc-900/70 border-zinc-800/80 text-zinc-400 hover:border-zinc-700"
                }`}
              >
                <div className="flex items-center gap-1.5 justify-center">
                  <span>💸</span>
                  <span>Payment</span>
                </div>
                {isSimulating && simStep === 6 && simType === "failure" && (
                  <span className="text-[7px] text-rose-400 block mt-0.5">Failed: Balance limit</span>
                )}
              </button>

              {/* Inventory Node */}
              <button
                onClick={() => setSelectedNode("inventoryService")}
                className={`w-full max-w-[120px] p-2.5 rounded-lg border text-[11px] font-bold transition-all duration-300 cursor-pointer ${
                  isNodeActive("inventoryService")
                    ? simStep === 7 && simType === "failure"
                      ? "bg-rose-500/20 border-rose-400 text-rose-300 animate-pulse"
                      : "bg-purple-500/20 border-purple-400 text-white"
                    : "bg-zinc-900/70 border-zinc-800/80 text-zinc-400 hover:border-zinc-700"
                }`}
              >
                <div className="flex items-center gap-1.5 justify-center">
                  <span>📦</span>
                  <span>Inventory</span>
                </div>
                {isSimulating && simStep === 7 && simType === "failure" && (
                  <span className="text-[7px] text-amber-400 block mt-0.5">Compensating: Restored</span>
                )}
              </button>
            </div>

          </div>

          {/* Simulation Status Overlay Banner */}
          {isSimulating && (
            <div className="absolute bottom-3 left-3 right-3 bg-zinc-900/90 border border-zinc-800 px-3 py-2 rounded-lg flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span className="text-zinc-300 font-mono">
                  Đang chạy mô phỏng: <strong className="text-white">{simType === "success" ? "Thành Công" : "Giao dịch lỗi (Rollback)"}</strong>
                </span>
              </div>
              <span className="text-[10px] text-zinc-500 font-bold bg-zinc-950 px-2 py-0.5 rounded border border-zinc-850">
                Bước {simStep} / {simType === "success" ? 6 : 7}
              </span>
            </div>
          )}
        </div>

        {/* Details & Live Output Panel - col-span 4 */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          
          {/* Node details display */}
          <div className="flex-1 bg-zinc-900/60 border border-zinc-850 rounded-xl p-5 flex flex-col justify-between">
            {selectedNode ? (
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    {nodeDetails[selectedNode].title}
                  </h4>
                  <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider mt-2.5 border-b border-zinc-800 pb-1.5">
                    Stack: {nodeDetails[selectedNode].tech}
                  </div>
                  
                  <div className="text-[11px] text-zinc-300 font-semibold mt-3 italic">
                    Vai trò: {nodeDetails[selectedNode].role}
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed font-normal">
                    {nodeDetails[selectedNode].detail}
                  </p>
                </div>
                
                <button
                  onClick={() => setSelectedNode(null)}
                  className="mt-6 text-[10px] font-bold text-zinc-500 hover:text-zinc-300 transition-colors uppercase self-start"
                >
                  ← Đóng chi tiết
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center h-full py-8">
                <Info className="w-8 h-8 text-zinc-700 mb-2.5" />
                <p className="text-xs text-zinc-400 font-bold">Chọn một node bất kỳ</p>
                <p className="text-[10px] text-zinc-500 mt-1 max-w-[200px]">
                  Bấm vào một khối trong sơ đồ hệ thống phía bên trái để khám phá sâu hơn về stack kỹ thuật và cơ chế.
                </p>
              </div>
            )}
          </div>

          {/* Simulation steps / Logs */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-4 flex flex-col">
            <h4 className="text-xs font-bold text-zinc-400 tracking-wider uppercase border-b border-zinc-900 pb-2 mb-2 flex items-center justify-between">
              <span>Hệ thống Log mô phỏng</span>
              <span className="text-[9px] text-zinc-600 font-mono">Real-time trace</span>
            </h4>
            <div className="flex flex-col gap-1.5 font-mono text-[10px] leading-normal">
              {simLogs.length > 0 ? (
                simLogs.map((log, i) => {
                  const isLast = i === simLogs.length - 1;
                  const isCompensate = log.includes("bù") || log.includes("Compensating") || log.includes("ROLLBACK") || log.includes("THẤT BẠI");
                  return (
                    <div 
                      key={i} 
                      className={`${isLast ? "text-cyan-400 font-bold" : isCompensate ? "text-rose-400" : "text-zinc-500"}`}
                    >
                      {log}
                    </div>
                  );
                })
              ) : (
                <div className="text-zinc-600 italic py-2 text-center">
                  Nhấp vào nút mô phỏng ở góc trên để chạy luồng giao dịch.
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

