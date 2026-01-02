'use client'

import { motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

interface Keypad3DProps {
  onDeployClick: () => void;
  onBuildClick?: () => void;
  onShipClick?: () => void;
  isLoading: boolean;
}

const Keypad3D = ({ onDeployClick, onBuildClick, onShipClick, isLoading }: Keypad3DProps) => {
  const [exploded, setExploded] = useState(false);
  const [pressed, setPressed] = useState<Record<string, boolean>>({});
  const keypadRef = useRef<HTMLDivElement>(null);

  const config = useMemo(() => ({
    one: { travel: 26, text: 'build', key: 'b', hue: 114, sat: 1, bright: 1 },
    two: { travel: 26, text: 'ship', key: 's', hue: 0, sat: 1, bright: 1 },
    three: { travel: 18, text: 'deploy', key: 'Enter', hue: 210, sat: 1, bright: 1 },
  }), []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const keyId = Object.keys(config).find(id =>
        config[id as keyof typeof config].key.toLowerCase() === event.key.toLowerCase()
      );
      if (keyId) {
        setPressed(prev => ({ ...prev, [keyId]: true }));
        if (keyId === 'one' && onBuildClick) onBuildClick();
        if (keyId === 'two' && onShipClick) onShipClick();
        if (keyId === 'three') onDeployClick();
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const keyId = Object.keys(config).find(id =>
        config[id as keyof typeof config].key.toLowerCase() === event.key.toLowerCase()
      );
      if (keyId) {
        setPressed(prev => ({ ...prev, [keyId]: false }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [onDeployClick, onBuildClick, onShipClick, config]);

  const handleButtonPress = (keyId: string) => {
    setPressed(prev => ({ ...prev, [keyId]: true }));
    setTimeout(() => {
      setPressed(prev => ({ ...prev, [keyId]: false }));
    }, 150);

    if (keyId === 'one' && onBuildClick) onBuildClick();
    if (keyId === 'two' && onShipClick) onShipClick();
    if (keyId === 'three') onDeployClick();
  };

  return (
    <div
      ref={keypadRef}
      className="perspective-1000 p-8"
      data-exploded={exploded}
    >
      <motion.div
        className="keypad preserve-3d relative w-[clamp(280px,35vw,400px)] aspect-[400/310] flex items-center justify-center"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'translate 0.26s ease-out, transform 0.26s ease-out'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Base */}
        <div
          className="keypad__base absolute bottom-0 w-full transition-all duration-[0.26s] ease-out"
          style={{
            transitionProperty: 'translate',
            translate: exploded ? '0 calc(2.5 * 10vh)' : '0 0'
          }}
        >
          <img
            src="https://assets.codepen.io/605876/keypad-base.png?format=auto&quality=86"
            alt=""
            className="w-full transition-all duration-[0.26s] ease-out"
          />
        </div>

        {/* Build Key */}
        <button
          onClick={() => handleButtonPress('one')}
          data-pressed={pressed.one}
          className="key keypad__single keypad__single--left absolute w-[40.5%] left-[29.3%] bottom-[54.2%] h-[46%] border-0 bg-transparent p-0 cursor-pointer outline-none transition-all duration-[0.26s] ease-out"
          style={{
            clipPath: 'polygon(0 0, 54% 0, 89% 24%, 100% 70%, 54% 100%, 46% 100%, 0 69%, 12% 23%, 47% 0%)',
            mask: 'url(https://assets.codepen.io/605876/keypad-single.png?format=auto&quality=86) 50% 50% / 100% 100%',
            transformStyle: 'preserve-3d',
            transitionProperty: 'translate',
            translate: exploded ? '0 calc(-2 * 10vh)' : '0 0'
          }}
        >
          <span className="key__mask w-full h-full inline-block">
            <span
              className="key__content w-full inline-block h-full transition-all duration-[0.12s] ease-out"
              style={{
                translate: pressed.one ? '0 calc(26 * 1%)' : '0 0',
                containerType: 'inline-size'
              }}
            >
              <span
                className="key__text absolute w-[52%] h-[62%] text-[18cqi] z-[21] top-[5%] left-0 text-white flex flex-col justify-center items-center leading-[1.1] text-center"
                style={{
                  translate: '45% -16%',
                  transform: 'rotateX(36deg) rotateY(45deg) rotateX(-90deg) rotate(0deg)',
                  padding: '1ch'
                }}
              >
                {config.one.text}
              </span>
              <img
                src="https://assets.codepen.io/605876/keypad-single.png?format=auto&quality=86"
                alt=""
                className="absolute top-0 opacity-100 w-[96%] left-1/2 -translate-x-1/2 translate-y-[1%] transition-all duration-[0.12s] ease-out"
                style={{
                  filter: `hue-rotate(${config.one.hue}deg) saturate(${config.one.sat}) brightness(${config.one.bright})`
                }}
              />
            </span>
          </span>
        </button>

        {/* Ship Key */}
        <button
          onClick={() => handleButtonPress('two')}
          data-pressed={pressed.two}
          className="key keypad__single absolute w-[40.5%] left-[54%] bottom-[36%] h-[46%] border-0 bg-transparent p-0 cursor-pointer outline-none transition-all duration-[0.26s] ease-out"
          style={{
            clipPath: 'polygon(0 0, 54% 0, 89% 24%, 100% 70%, 54% 100%, 46% 100%, 0 69%, 12% 23%, 47% 0%)',
            mask: 'url(https://assets.codepen.io/605876/keypad-single.png?format=auto&quality=86) 50% 50% / 100% 100%',
            transformStyle: 'preserve-3d',
            transitionProperty: 'translate',
            translate: exploded ? '0 calc(-1 * 10vh)' : '0 0'
          }}
        >
          <span className="key__mask w-full h-full inline-block">
            <span
              className="key__content w-full inline-block h-full transition-all duration-[0.12s] ease-out"
              style={{
                translate: pressed.two ? '0 calc(26 * 1%)' : '0 0',
                containerType: 'inline-size'
              }}
            >
              <span
                className="key__text absolute w-[52%] h-[62%] text-[18cqi] z-[21] top-[5%] left-0 text-white flex flex-col justify-center items-center leading-[1.1] text-center"
                style={{
                  translate: '45% -16%',
                  transform: 'rotateX(36deg) rotateY(45deg) rotateX(-90deg) rotate(0deg)',
                  padding: '1ch'
                }}
              >
                {config.two.text}
              </span>
              <img
                src="https://assets.codepen.io/605876/keypad-single.png?format=auto&quality=86"
                alt=""
                className="absolute top-0 opacity-100 w-[96%] left-1/2 -translate-x-1/2 translate-y-[1%] transition-all duration-[0.12s] ease-out"
                style={{
                  filter: `hue-rotate(${config.two.hue}deg) saturate(${config.two.sat}) brightness(${config.two.bright})`
                }}
              />
            </span>
          </span>
        </button>

        {/* Deploy Key */}
        <button
          onClick={() => handleButtonPress('three')}
          data-pressed={pressed.three}
          disabled={isLoading}
          className="key keypad__double absolute w-[64%] h-[65%] left-[6%] bottom-[17.85%] border-0 bg-transparent p-0 cursor-pointer outline-none transition-all duration-[0.26s] ease-out disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            clipPath: 'polygon(34% 0, 93% 44%, 101% 78%, 71% 100%, 66% 100%, 0 52%, 0 44%, 7% 17%, 30% 0)',
            mask: 'url(https://assets.codepen.io/605876/keypad-double.png?format=auto&quality=86) 50% 50% / 100% 100%',
            transformStyle: 'preserve-3d',
            transitionProperty: 'translate',
            translate: exploded ? '0 calc(0 * 10vh)' : '0 0'
          }}
        >
          <span className="key__mask w-full h-full inline-block">
            <span
              className="key__content w-full inline-block h-full transition-all duration-[0.12s] ease-out"
              style={{
                translate: (pressed.three || isLoading) ? '0 calc(18 * 1%)' : '0 0',
                containerType: 'inline-size'
              }}
            >
              <span
                className="key__text absolute h-[46%] w-[86%] text-[12cqi] z-[21] top-[5%] left-0 text-white flex flex-col justify-center items-center leading-[1.1] text-center"
                style={{
                  translate: '8% 10%',
                  transform: 'rotateX(36deg) rotateY(45deg) rotateX(-90deg) rotate(0deg)',
                  padding: '1ch'
                }}
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                ) : (
                  <>
                    <span>✨ deploy</span>
                    <span className="text-[0.45em] opacity-90 font-medium mt-[2px] tracking-[0.05em]">
                      AI Assistant
                    </span>
                  </>
                )}
              </span>
              <img
                src="https://assets.codepen.io/605876/keypad-double.png?format=auto&quality=86"
                alt=""
                className="absolute top-0 opacity-100 w-[99%] left-1/2 -translate-x-1/2 translate-y-[1%] transition-all duration-[0.12s] ease-out"
                style={{
                  filter: `hue-rotate(${config.three.hue}deg) saturate(${config.three.sat}) brightness(${config.three.bright})`
                }}
              />
            </span>
          </span>
        </button>
      </motion.div>
    </div>
  );
};

export default Keypad3D;
