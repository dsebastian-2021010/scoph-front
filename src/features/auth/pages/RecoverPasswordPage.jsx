import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { EnvelopeIcon, KeyIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import logo from "../../../assets/logo.png";
import personalMedico from "../../../assets/PersonalMedico.jpeg";

// Elementos SVG flotantes médicos - contenidos dentro del lado izquierdo del card
function FloatingElements() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-l-3xl">

            {/* Cruz médica - arriba izquierda */}
            <svg className="absolute top-8 left-8 opacity-15 animate-pulse" width="35" height="35" viewBox="0 0 40 40">
                <rect x="15" y="0" width="10" height="40" rx="3" fill="white" />
                <rect x="0" y="15" width="40" height="10" rx="3" fill="white" />
            </svg>

            {/* Cruz médica - abajo derecha */}
            <svg className="absolute bottom-10 right-6 opacity-10 animate-pulse" style={{ animationDelay: "1s" }} width="25" height="25" viewBox="0 0 40 40">
                <rect x="15" y="0" width="10" height="40" rx="3" fill="white" />
                <rect x="0" y="15" width="40" height="10" rx="3" fill="white" />
            </svg>

            {/* Cruz médica pequeña - centro */}
            <svg className="absolute top-1/2 left-1/3 opacity-[0.08] animate-pulse" style={{ animationDelay: "2s" }} width="18" height="18" viewBox="0 0 40 40">
                <rect x="15" y="0" width="10" height="40" rx="3" fill="white" />
                <rect x="0" y="15" width="40" height="10" rx="3" fill="white" />
            </svg>

            {/* Línea de electrocardiograma - superior */}
            <svg className="absolute top-12 left-0 right-0 opacity-[0.12]" width="100%" height="50" viewBox="0 0 400 50" preserveAspectRatio="none">
                <polyline
                    points="0,25 40,25 55,25 63,5 72,45 80,12 88,38 96,25 160,25 175,25 183,8 191,42 199,15 207,35 215,25 280,25 295,25 303,6 311,44 319,16 327,38 335,25 400,25"
                    fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                />
            </svg>

            {/* Línea de electrocardiograma - inferior */}
            <svg className="absolute bottom-16 left-0 right-0 opacity-[0.10]" width="100%" height="40" viewBox="0 0 400 40" preserveAspectRatio="none">
                <polyline
                    points="0,20 40,20 52,20 60,4 68,36 76,10 84,30 92,20 150,20 165,20 173,6 181,34 189,12 197,28 205,20 270,20 285,20 293,5 301,35 309,13 317,30 325,20 400,20"
                    fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                />
            </svg>

            {/* Molécula - esquina superior derecha */}
            <svg className="absolute top-16 right-8 opacity-[0.12]" width="70" height="70" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="6" fill="white" />
                <circle cx="15" cy="25" r="4" fill="white" />
                <circle cx="65" cy="25" r="4" fill="white" />
                <circle cx="15" cy="55" r="4" fill="white" />
                <circle cx="65" cy="55" r="4" fill="white" />
                <circle cx="40" cy="10" r="3" fill="white" />
                <circle cx="40" cy="70" r="3" fill="white" />
                <line x1="40" y1="40" x2="15" y2="25" stroke="white" strokeWidth="1.5" opacity="0.6" />
                <line x1="40" y1="40" x2="65" y2="25" stroke="white" strokeWidth="1.5" opacity="0.6" />
                <line x1="40" y1="40" x2="15" y2="55" stroke="white" strokeWidth="1.5" opacity="0.6" />
                <line x1="40" y1="40" x2="65" y2="55" stroke="white" strokeWidth="1.5" opacity="0.6" />
                <line x1="40" y1="40" x2="40" y2="10" stroke="white" strokeWidth="1.5" opacity="0.6" />
                <line x1="40" y1="40" x2="40" y2="70" stroke="white" strokeWidth="1.5" opacity="0.6" />
            </svg>

            {/* Molécula pequeña - abajo izquierda */}
            <svg className="absolute bottom-20 left-8 opacity-[0.10]" width="50" height="50" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="6" fill="white" />
                <circle cx="15" cy="25" r="4" fill="white" />
                <circle cx="65" cy="25" r="4" fill="white" />
                <circle cx="15" cy="55" r="4" fill="white" />
                <circle cx="65" cy="55" r="4" fill="white" />
                <line x1="40" y1="40" x2="15" y2="25" stroke="white" strokeWidth="1.5" opacity="0.6" />
                <line x1="40" y1="40" x2="65" y2="25" stroke="white" strokeWidth="1.5" opacity="0.6" />
                <line x1="40" y1="40" x2="15" y2="55" stroke="white" strokeWidth="1.5" opacity="0.6" />
                <line x1="40" y1="40" x2="65" y2="55" stroke="white" strokeWidth="1.5" opacity="0.6" />
            </svg>

            {/* Calendario - centro izquierda */}
            <svg className="absolute top-1/3 left-6 opacity-[0.10]" width="40" height="40" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" fill="none" stroke="white" strokeWidth="1.5" />
                <line x1="3" y1="9" x2="21" y2="9" stroke="white" strokeWidth="1.5" />
                <line x1="8" y1="2" x2="8" y2="6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="16" y1="2" x2="16" y2="6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <rect x="7" y="12" width="3" height="3" rx="0.5" fill="white" opacity="0.6" />
                <rect x="11" y="12" width="3" height="3" rx="0.5" fill="white" opacity="0.6" />
                <rect x="15" y="12" width="3" height="3" rx="0.5" fill="white" opacity="0.6" />
                <rect x="7" y="16" width="3" height="3" rx="0.5" fill="white" opacity="0.6" />
                <rect x="11" y="16" width="3" height="3" rx="0.5" fill="white" opacity="0.6" />
            </svg>

        </div>
    );
}

// Elementos decorativos muy sutiles para el fondo detrás del card
function BackgroundElements() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
                style={{ background: "radial-gradient(circle, #F2BB77, transparent)" }} />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
                style={{ background: "radial-gradient(circle, #F29863, transparent)" }} />
            <svg className="absolute top-16 right-24 opacity-[0.05]" width="50" height="50" viewBox="0 0 40 40">
                <rect x="15" y="0" width="10" height="40" rx="3" fill="#F27405" />
                <rect x="0" y="15" width="40" height="10" rx="3" fill="#F27405" />
            </svg>
            <svg className="absolute bottom-20 left-20 opacity-[0.05]" width="35" height="35" viewBox="0 0 40 40">
                <rect x="15" y="0" width="10" height="40" rx="3" fill="#D97236" />
                <rect x="0" y="15" width="40" height="10" rx="3" fill="#D97236" />
            </svg>
        </div>
    );
}

function LeftPanel() {
    return (
        <div className="hidden lg:flex w-1/2 relative flex-col items-center justify-center overflow-hidden"
            style={{ background: "linear-gradient(135deg, #F27405 0%, #D97236 60%, #8B3A0F 100%)" }}
        >
            <div className="absolute inset-0">
                <img src={personalMedico} alt="Personal Médico" className="w-full h-full object-cover opacity-15" />
                <div className="absolute inset-0"
                    style={{ background: "linear-gradient(135deg, #F27405CC 0%, #D97236CC 60%, #8B3A0FCC 100%)" }}
                />
            </div>

            <FloatingElements />

            <div className="relative z-10 flex flex-col items-center text-center px-10">
                <div className="bg-white rounded-full shadow-2xl overflow-hidden w-28 h-28 flex items-center justify-center mb-5">
                    <img src={logo} alt="SCOPH URL" className="w-full h-full object-cover" />
                </div>
                <h1 className="text-white text-3xl font-extrabold tracking-wide mb-2 drop-shadow-lg">SCOPH - URL</h1>
                <p className="text-orange-100 text-base font-medium mb-5">Gestor de Jornadas Médicas</p>
                <div className="w-12 h-1 bg-white/40 rounded-full mb-5" />
                <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                    Optimizando la salud, <br />
                    <span className="text-white font-semibold">organizando el futuro.</span>
                </p>
                <div className="flex gap-2 mt-8">
                    <div className="w-2 h-2 rounded-full bg-white opacity-80" />
                    <div className="w-6 h-2 rounded-full bg-white opacity-50" />
                    <div className="w-2 h-2 rounded-full bg-white opacity-30" />
                </div>
            </div>

            <div className="absolute bottom-4 left-0 right-0 text-center" />
        </div>
    );
}

export default function RecoverPasswordPage() {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setCursorPosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const handleCodeChange = (index, value) => {
        if (!/^\d*$/.test(value)) return;
        const newCode = [...code];
        newCode[index] = value.slice(-1);
        setCode(newCode);

        if (value && index < 5) {
            const nextInput = document.getElementById(`code-${index + 1}`);
            if (nextInput) {
                nextInput.focus();
            }
        }
    };

    const handleCodeKeyDown = (index, e) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            const previousInput = document.getElementById(`code-${index - 1}`);
            if (previousInput) {
                previousInput.focus();
            }
        }
    };

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        setStep(2);
    };

    const handleCodeSubmit = (e) => {
        e.preventDefault();
        navigate("/dashboard");
    };

    return (
        <div
            ref={containerRef}
            className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden"
            style={{ backgroundColor: "#F2F2F0" }}
        >
            <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-150"
                style={{
                    background: `radial-gradient(circle 700px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(242, 187, 119, 0.4) 0%, rgba(242, 187, 119, 0.15) 50%, transparent 85%)`,
                }}
            />
            <BackgroundElements />

            <div className="relative z-10 w-full max-w-4xl min-h-[580px] flex rounded-3xl shadow-2xl overflow-hidden">
                <LeftPanel />

                <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-8 py-10">
                    <div className="w-full max-w-sm">
                        <div className="flex lg:hidden flex-col items-center mb-8">
                            <div className="bg-white rounded-full shadow-lg overflow-hidden w-20 h-20 flex items-center justify-center mb-3 border-2 border-primary">
                                <img src={logo} alt="SCOPH URL" className="w-full h-full object-cover" />
                            </div>
                            <h1 className="text-primary text-xl font-bold">SCOPH - URL</h1>
                        </div>

                        {step === 1 && (
                            <div>
                                <div className="w-14 h-14 flex items-center justify-center mb-5">
                                    <EnvelopeIcon className="w-7 h-7 text-primary" />
                                </div>

                                <h2 className="text-gray-800 text-2xl font-extrabold mb-1">Recuperar contraseña</h2>
                                <p className="text-gray-400 text-sm mb-7">
                                    Ingresa tu correo registrado y te enviaremos un código de verificación.
                                </p>

                                <form onSubmit={handleEmailSubmit} className="space-y-5">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-sm font-semibold text-gray-600">Correo electrónico</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="ejemplo@scoph.org"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700 placeholder-gray-300 transition"
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full text-white font-bold py-3 rounded-xl transition duration-200 shadow-md hover:shadow-xl active:scale-95 text-base"
                                        style={{ background: "linear-gradient(135deg, #F27405 0%, #D97236 60%, #F29863 100%)" }}
                                        onMouseEnter={(e) => e.currentTarget.style.background = "linear-gradient(135deg, #D97236 0%, #8B3A0F 60%, #D97236 100%)"}
                                        onMouseLeave={(e) => e.currentTarget.style.background = "linear-gradient(135deg, #F27405 0%, #D97236 60%, #F29863 100%)"}
                                    >
                                        Enviar código de verificación
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => navigate("/login")}
                                        className="flex items-center justify-center gap-2 w-full py-2 text-sm text-gray-400 hover:text-primary transition font-medium"
                                    >
                                        <ArrowLeftIcon className="w-4 h-4" />
                                        Volver al inicio de sesión
                                    </button>
                                </form>
                            </div>
                        )}

                        {step === 2 && (
                            <div>
                                <div className="w-14 h-14 flex items-center justify-center mb-5">
                                    <KeyIcon className="w-7 h-7 text-primary" />
                                </div>

                                <h2 className="text-gray-800 text-2xl font-extrabold mb-1">Código de verificación</h2>
                                <p className="text-gray-400 text-sm mb-2">
                                    Ingresa el código de 6 dígitos que enviamos a:
                                </p>
                                <p className="text-primary font-semibold text-sm mb-7 truncate">{email}</p>

                                <form onSubmit={handleCodeSubmit} className="space-y-6">
                                    <div className="flex gap-2 justify-between">
                                        {code.map((digit, index) => (
                                            <input
                                                key={index}
                                                id={`code-${index}`}
                                                type="text"
                                                inputMode="numeric"
                                                maxLength={1}
                                                value={digit}
                                                onChange={(e) => handleCodeChange(index, e.target.value)}
                                                onKeyDown={(e) => handleCodeKeyDown(index, e)}
                                                className="w-11 h-12 text-center text-lg font-bold rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700 transition"
                                            />
                                        ))}
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full text-white font-bold py-3 rounded-xl transition duration-200 shadow-md hover:shadow-xl active:scale-95 text-base"
                                        style={{ background: "linear-gradient(135deg, #F27405 0%, #D97236 60%, #F29863 100%)" }}
                                        onMouseEnter={(e) => e.currentTarget.style.background = "linear-gradient(135deg, #D97236 0%, #8B3A0F 60%, #D97236 100%)"}
                                        onMouseLeave={(e) => e.currentTarget.style.background = "linear-gradient(135deg, #F27405 0%, #D97236 60%, #F29863 100%)"}
                                    >
                                        Verificar código
                                    </button>

                                    <div className="flex flex-col items-center gap-2">
                                        <button
                                            type="button"
                                            onClick={() => setStep(1)}
                                            className="text-sm text-gray-400 hover:text-primary transition font-medium"
                                        >
                                            ¿No recibiste el código? <span className="text-primary font-semibold">Reenviar</span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => navigate("/login")}
                                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition font-medium"
                                        >
                                            <ArrowLeftIcon className="w-4 h-4" />
                                            Volver al inicio de sesión
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <p className="absolute bottom-4 left-0 right-0 text-center text-gray-400/60 text-xs">
                © 2025 SCOPH - URL · Todos los derechos reservados
            </p>
        </div>
    );
}
