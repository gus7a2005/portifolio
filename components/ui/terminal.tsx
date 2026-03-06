"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TerminalContextType {
  sequence: boolean;
  startOnView: boolean;
  activeSequenceId: number;
  registerChild: () => number;
  completeChild: (id: number) => void;
}

const TerminalContext = createContext<TerminalContextType | undefined>(
  undefined,
);

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
  sequence?: boolean;
  startOnView?: boolean;
}

export function Terminal({
  children,
  className,
  sequence = true,
  startOnView = true,
}: TerminalProps) {
  const [activeSequenceId, setActiveSequenceId] = useState(0);
  const nextIdRef = useRef(0);

  const registerChild = () => {
    const id = nextIdRef.current;
    nextIdRef.current += 1;
    return id;
  };

  const completeChild = (id: number) => {
    setActiveSequenceId(id + 1);
  };

  return (
    <TerminalContext.Provider
      value={{
        sequence,
        startOnView,
        activeSequenceId,
        registerChild,
        completeChild,
      }}
    >
      <div
        className={cn(
          "w-full rounded-lg border border-gray-700/50 bg-gray-900/90 backdrop-blur-sm shadow-2xl overflow-hidden",
          className,
        )}
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-2 border-b border-gray-700/50 bg-gray-800/50 px-4 py-3">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <div className="ml-2 text-sm text-gray-400">terminal</div>
        </div>

        {/* Terminal Body */}
        <div className="p-4 font-mono text-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-emerald-400">➜</span>
            <span className="text-blue-400">~</span>
          </div>
          {children}
        </div>
      </div>
    </TerminalContext.Provider>
  );
}

interface TypingAnimationProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  startOnView?: boolean;
}

export function TypingAnimation({
  children,
  className,
  duration = 50,
  delay = 0,
  as: Component = "span",
  startOnView: propStartOnView,
}: TypingAnimationProps) {
  const context = useContext(TerminalContext);
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const myIdRef = useRef<number | null>(null);
  const ref = useRef<HTMLElement>(null);

  const startOnView = propStartOnView ?? context?.startOnView ?? true;
  const sequence = context?.sequence ?? false;

  // Registrar ID na montagem
  useEffect(() => {
    if (context && myIdRef.current === null) {
      myIdRef.current = context.registerChild();
    }
  }, [context]);

  // Observer para visibilidade
  useEffect(() => {
    if (!startOnView) {
      setIsVisible(true);
      return;
    }

    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [startOnView]);

  // Verificar se é minha vez na sequência
  const isMyTurn =
    !sequence ||
    myIdRef.current === null ||
    (context && context.activeSequenceId === myIdRef.current);

  // Animação de digitação
  useEffect(() => {
    if (!isVisible || !isMyTurn || hasCompleted) return;

    // Iniciar delay se necessário
    if (!hasStarted && delay > 0) {
      const delayTimeout = setTimeout(() => {
        setHasStarted(true);
      }, delay);
      return () => clearTimeout(delayTimeout);
    }

    if (!hasStarted && delay === 0) {
      setHasStarted(true);
    }

    // Digitar caracteres
    if (hasStarted && currentIndex < children.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayText((prev) => prev + children[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, duration);
      return () => clearTimeout(typingTimeout);
    }

    // Completar e avançar
    if (hasStarted && currentIndex === children.length && !hasCompleted) {
      setHasCompleted(true);
      if (sequence && context && myIdRef.current !== null) {
        setTimeout(() => {
          context.completeChild(myIdRef.current!);
        }, 100);
      }
    }
  }, [
    isVisible,
    isMyTurn,
    hasStarted,
    currentIndex,
    children,
    duration,
    delay,
    sequence,
    context,
    hasCompleted,
  ]);

  return (
    <Component ref={ref} className={cn("inline-block", className)}>
      {displayText}
      {isVisible &&
        isMyTurn &&
        hasStarted &&
        currentIndex < children.length && (
          <span className="animate-pulse ml-0.5">▊</span>
        )}
    </Component>
  );
}

interface AnimatedSpanProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  startOnView?: boolean;
}

export function AnimatedSpan({
  children,
  className,
  delay = 0,
  startOnView: propStartOnView,
}: AnimatedSpanProps) {
  const context = useContext(TerminalContext);
  const [isVisible, setIsVisible] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const myIdRef = useRef<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const startOnView = propStartOnView ?? context?.startOnView ?? false;
  const sequence = context?.sequence ?? false;

  // Registrar ID na montagem
  useEffect(() => {
    if (context && myIdRef.current === null) {
      myIdRef.current = context.registerChild();
    }
  }, [context]);

  // Observer para visibilidade
  useEffect(() => {
    if (!startOnView) {
      setIsVisible(true);
      return;
    }

    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [startOnView]);

  // Verificar se é minha vez na sequência
  const isMyTurn =
    !sequence ||
    myIdRef.current === null ||
    (context && context.activeSequenceId === myIdRef.current);

  const shouldShow = isVisible && isMyTurn;

  // Marcar como mostrado quando aparecer pela primeira vez
  useEffect(() => {
    if (shouldShow && !hasShown) {
      setHasShown(true);
    }
  }, [shouldShow, hasShown]);

  // Avançar para próximo após aparecer
  useEffect(() => {
    if (shouldShow && !hasCompleted) {
      const timer = setTimeout(() => {
        setHasCompleted(true);
        if (sequence && context && myIdRef.current !== null) {
          context.completeChild(myIdRef.current);
        }
      }, delay + 200);
      return () => clearTimeout(timer);
    }
  }, [shouldShow, hasCompleted, sequence, context, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={hasShown ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.15 }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}
