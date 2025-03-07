"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface MacBookKeyboardProps {
  keyColor?: string; // Tailwind class or CSS color value
  textColor?: string; // Tailwind class or CSS color value
  glowColor?: string; // Tailwind class or CSS color value
  buttonBgColor?: string; // Tailwind class or CSS color value
  className?: string; // Tailwind class
}

type KeyData = {
  id: string; // Key ID
  text?: string; // Key text
  symbol?: string; // Key symbol
  width?: string; // Key width
  textSize?: string; // Key text size
  height?: string; // Key height
  label?: string; // Key label
  keys?: KeyData[]; // Nested keys
};

type ArrowKeyRow = {
  keys: KeyData[];
  className?: string;
};

export default function MacBookKeyboard({
  keyColor = "bg-gray-900",
  textColor = "text-gray-200",
  glowColor = "rgba(102, 187, 255, 0.7)",
  buttonBgColor,
  className,
}: MacBookKeyboardProps) {
  // State to track pressed keys
  const [pressedKeys, setPressedKeys] = useState<Record<string, boolean>>({});

  // Function row symbols
  const functionSymbols: Record<string, string> = {
    F1: "☀",
    F2: "☀",
    F3: "⌘",
    F4: "🔍",
    F5: "🎤",
    F6: "☾",
    F7: "◀◀",
    F8: "▶",
    F9: "▶▶",
    F10: "🔇",
    F11: "🔉",
    F12: "🔊",
  };

  // Number row symbols
  const numberSymbols: Record<string, string> = {
    "1": "!",
    "2": "@",
    "3": "£",
    "4": "$",
    "5": "%",
    "6": "^",
    "7": "&",
    "8": "*",
    "9": "(",
    "0": ")",
    "-": "_",
    "=": "+",
  };

  // Define keys with their properties
  const functionKeys: KeyData[] = [
    { id: "esc", text: "esc", width: "w-16" },
    { id: "f1", text: "F1", symbol: functionSymbols["F1"], width: "w-14" },
    { id: "f2", text: "F2", symbol: functionSymbols["F2"], width: "w-14" },
    { id: "f3", text: "F3", symbol: functionSymbols["F3"], width: "w-14" },
    { id: "f4", text: "F4", symbol: functionSymbols["F4"], width: "w-14" },
    { id: "f5", text: "F5", symbol: functionSymbols["F5"], width: "w-14" },
    { id: "f6", text: "F6", symbol: functionSymbols["F6"], width: "w-14" },
    { id: "f7", text: "F7", symbol: functionSymbols["F7"], width: "w-14" },
    { id: "f8", text: "F8", symbol: functionSymbols["F8"], width: "w-14" },
    { id: "f9", text: "F9", symbol: functionSymbols["F9"], width: "w-14" },
    { id: "f10", text: "F10", symbol: functionSymbols["F10"], width: "w-14" },
    { id: "f11", text: "F11", symbol: functionSymbols["F11"], width: "w-14" },
    { id: "f12", text: "F12", symbol: functionSymbols["F12"], width: "w-16" },
    { id: "eject", text: "", symbol: "⏏", width: "w-14" },
  ];

  const numberKeys: KeyData[] = [
    { id: "section-sign", text: "§", symbol: "±", width: "w-14" },
    { id: "one", text: "1", symbol: numberSymbols["1"], width: "w-14" },
    { id: "two", text: "2", symbol: numberSymbols["2"], width: "w-14" },
    { id: "three", text: "3", symbol: numberSymbols["3"], width: "w-14" },
    { id: "four", text: "4", symbol: numberSymbols["4"], width: "w-14" },
    { id: "five", text: "5", symbol: numberSymbols["5"], width: "w-14" },
    { id: "six", text: "6", symbol: numberSymbols["6"], width: "w-14" },
    { id: "seven", text: "7", symbol: numberSymbols["7"], width: "w-14" },
    { id: "eight", text: "8", symbol: numberSymbols["8"], width: "w-14" },
    { id: "nine", text: "9", symbol: numberSymbols["9"], width: "w-14" },
    { id: "zero", text: "0", symbol: numberSymbols["0"], width: "w-14" },
    { id: "minus", text: "-", symbol: numberSymbols["-"], width: "w-14" },
    { id: "equals", text: "=", symbol: numberSymbols["="], width: "w-14" },
    { id: "delete", text: "delete", width: "w-20" },
  ];

  const topRowKeys: KeyData[] = [
    { id: "tab", text: "tab", width: "w-20" },
    { id: "q", text: "Q", width: "w-14" },
    { id: "w", text: "W", width: "w-14" },
    { id: "e", text: "E", width: "w-14" },
    { id: "r", text: "R", width: "w-14" },
    { id: "t", text: "T", width: "w-14" },
    { id: "y", text: "Y", width: "w-14" },
    { id: "u", text: "U", width: "w-14" },
    { id: "i", text: "I", width: "w-14" },
    { id: "o", text: "O", width: "w-14" },
    { id: "p", text: "P", width: "w-14" },
    { id: "bracketleft", text: "[", symbol: "{", width: "w-14" },
    { id: "bracketright", text: "]", symbol: "}", width: "w-14" },
    { id: "backslash", text: "\\", symbol: "|", width: "w-16" },
  ];

  const homeRowKeys: KeyData[] = [
    { id: "capslock", text: "caps lock", width: "w-24" },
    { id: "a", text: "A", width: "w-14" },
    { id: "s", text: "S", width: "w-14" },
    { id: "d", text: "D", width: "w-14" },
    { id: "f", text: "F", width: "w-14" },
    { id: "g", text: "G", width: "w-14" },
    { id: "h", text: "H", width: "w-14" },
    { id: "j", text: "J", width: "w-14" },
    { id: "k", text: "K", width: "w-14" },
    { id: "l", text: "L", width: "w-14" },
    { id: "semicolon", text: ";", symbol: ":", width: "w-14" },
    { id: "quote", text: "'", symbol: '"', width: "w-14" },
    { id: "return", text: "return", width: "w-24" },
  ];

  const bottomRowKeys: KeyData[] = [
    { id: "shiftleft", text: "shift", width: "w-28" },
    { id: "z", text: "Z", width: "w-14" },
    { id: "x", text: "X", width: "w-14" },
    { id: "c", text: "C", width: "w-14" },
    { id: "v", text: "V", width: "w-14" },
    { id: "b", text: "B", width: "w-14" },
    { id: "n", text: "N", width: "w-14" },
    { id: "m", text: "M", width: "w-14" },
    { id: "comma", text: ",", symbol: "<", width: "w-16" },
    { id: "period", text: ".", symbol: ">", width: "w-14" },
    { id: "slash", text: "/", symbol: "?", width: "w-14" },
    { id: "shiftright", text: "shift", width: "w-28" },
  ];

  const spaceRowKeys: KeyData[] = [
    { id: "fn", text: "fn", width: "w-10" },
    {
      id: "controlleft",
      text: "⌃",
      textSize: "text-xl",
      label: "control",
      width: "w-14",
    },
    {
      id: "optionleft",
      text: "⌥",
      textSize: "text-xl",
      label: "option",
      width: "w-14",
    },
    {
      id: "commandleft",
      text: "⌘",
      textSize: "text-xl",
      label: "command",
      width: "w-20",
    },
    { id: "space", text: "", width: "w-72" },
    {
      id: "commandright",
      text: "⌘",
      textSize: "text-xl",
      label: "command",
      width: "w-20",
    },
    {
      id: "optionright",
      text: "⌥",
      textSize: "text-xl",
      label: "option",
      width: "w-14",
    },
  ];

  // Separate arrow key layout
  const arrowKeys: ArrowKeyRow[] = [
    // Top row - just the up arrow
    {
      keys: [
        { id: "arrowup", text: "▲", width: "w-[33px]", textSize: "text-sm" },
      ],
      className: "mb-0.5",
    },
    // Bottom row - left, down, right arrows
    {
      keys: [
        { id: "arrowleft", text: "◀", width: "w-[33px]", textSize: "text-sm" },
        { id: "arrowdown", text: "▼", width: "w-[33px]", textSize: "text-sm" },
        { id: "arrowright", text: "▶", width: "w-[33px]", textSize: "text-sm" },
      ],
      className: "",
    },
  ];

  // Handle key press
  const handleKeyPress = (id: string) => {
    setPressedKeys((prev) => ({ ...prev, [id]: true }));
    // Release key after a short delay
    setTimeout(() => {
      setPressedKeys((prev) => ({ ...prev, [id]: false }));
    }, 150);
  };

  // Check if a value is a valid CSS color (not a Tailwind class)
  const isCssColor = (value: string): boolean => {
    if (!value) return false;

    // Check for hex colors, rgb, rgba, hsl, etc.
    return (
      value.startsWith("#") ||
      value.startsWith("rgb") ||
      value.startsWith("rgba") ||
      value.startsWith("hsl") ||
      value.startsWith("hsla") ||
      // Basic CSS color names
      [
        "red",
        "blue",
        "green",
        "black",
        "white",
        "yellow",
        "purple",
        "pink",
        "orange",
        "gray",
        "grey",
      ].includes(value)
    );
  };

  // Get the effective button background color
  const getButtonBgColor: () => string = () => {
    // If buttonBgColor is provided, use that
    if (buttonBgColor) {
      return buttonBgColor;
    }
    // Otherwise fall back to the main keyColor
    return keyColor;
  };

  // Create a key component with backlit effect
  const Key = ({ keyData }: { keyData: KeyData }) => {
    const {
      id,
      text,
      symbol,
      width = "w-12",
      textSize = "text-xs",
      height = "h-12",
    } = keyData;
    const isPressed: boolean = pressedKeys[id];

    const isArrowKey = [
      "arrowup",
      "arrowdown",
      "arrowleft",
      "arrowright",
    ].includes(id);
    const keyHeight: string = isArrowKey ? "h-6" : height;

    // Get the effective button color to use
    const effectiveButtonColor = getButtonBgColor();

    // Generate styles based on prop values
    const keyStyles: React.CSSProperties = {
      transform: isPressed ? "translateY(2px)" : "translateY(0)",
      boxShadow: isPressed ? "inset 0 2px 4px rgba(0,0,0,0.3)" : "",
    };

    // Only add backgroundColor as inline style if button color is a CSS color value
    if (isCssColor(effectiveButtonColor)) {
      keyStyles.backgroundColor = effectiveButtonColor;

      // Darken for pressed state
      if (isPressed) {
        keyStyles.filter = "brightness(0.8)";
      }
    }

    // Generate text color styles
    const textStyles: React.CSSProperties = {
      textShadow: `0 0 8px ${glowColor.replace("0.7", "0.6")}`,
    };

    // Only add color as inline style if textColor is a CSS color value
    if (isCssColor(textColor)) {
      textStyles.color = textColor;
    }

    // Generate glow styles
    const glowStyles: React.CSSProperties = {
      boxShadow: `inset 0 0 10px 2px ${glowColor.replace("0.7", "0.2")}`,
    };

    // Add backgroundColor for glow if using RGB values
    if (glowColor.includes("rgb")) {
      glowStyles.backgroundColor = "rgba(102, 187, 255, 0.1)";
    }

    // Construct classes for the key
    const buttonClasses = [
      width,
      keyHeight,
      "border border-gray-800 rounded-md flex flex-col items-center justify-center relative m-0.5 shadow-md overflow-hidden cursor-pointer transition-all duration-100",
    ];

    // Add Tailwind background class if the button color is a Tailwind class
    if (effectiveButtonColor && effectiveButtonColor.startsWith("bg-")) {
      buttonClasses.push(effectiveButtonColor);
    }

    // Construct classes for the text
    const textClasses = [textSize, "z-10"];

    // Add Tailwind text class if the text color is a Tailwind class
    if (textColor && textColor.startsWith("text-")) {
      textClasses.push(textColor);
    }

    return (
      <div
        className={cn(...buttonClasses)}
        style={keyStyles}
        onClick={() => handleKeyPress(id)}
      >
        {/* Strong backlit glow effect */}
        <div
          className="absolute inset-0 opacity-10 z-0"
          style={glowStyles}
        ></div>

        {/* Key light edge effect */}
        <div className="absolute inset-0 border-t border-blue-200 opacity-5 z-0"></div>

        {/* Symbol and text */}
        {symbol && (
          <span
            className="text-xs absolute top-1 left-2 z-10"
            style={{
              color: "#9ca3af", // text-gray-400 equivalent
              textShadow: `0 0 5px ${glowColor}`,
            }}
          >
            {symbol}
          </span>
        )}
        <span className={cn(...textClasses)} style={textStyles}>
          {text}
        </span>

        {/* Character glow effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={`${textSize} opacity-30 blur-sm z-0`}
            style={{
              color: "#93c5fd", // text-blue-300 equivalent
              filter: "blur(3px)",
              transform: "scale(1.2)",
            }}
          >
            {text}
          </span>
        </div>
      </div>
    );
  };

  // Create a row of keys
  const KeyRow = ({
    keys,
    className = "",
  }: {
    keys: KeyData[];
    className?: string;
  }) => (
    <div className={cn("flex justify-center", className)}>
      {keys.map((key, index) => (
        <Key key={index} keyData={key} />
      ))}
    </div>
  );

  // Generate styles for the keyboard container
  const keyboardStyles: React.CSSProperties = {
    width: "830px",
  };

  // Only add backgroundColor as inline style if keyColor is a CSS color
  if (isCssColor(keyColor)) {
    keyboardStyles.backgroundColor = keyColor;
  }

  // Generate glow styles for the keyboard
  const keyboardGlowStyles: React.CSSProperties = {
    boxShadow: `0 0 30px 5px ${glowColor.replace("0.7", "0.3")}`,
  };

  // Add backgroundColor if using RGB values
  if (glowColor.includes("rgb")) {
    keyboardGlowStyles.backgroundColor = "rgba(102, 187, 255, 0.2)";
  }

  // Construct classes for the keyboard container
  const keyboardClasses = [
    "relative rounded-lg p-4 border border-gray-800 shadow-xl mx-auto",
    className,
  ];

  // Add Tailwind background class if the keyboard color is a Tailwind class
  if (keyColor && keyColor.startsWith("bg-")) {
    keyboardClasses.push(keyColor);
  }

  return (
    <div className={cn(...keyboardClasses)} style={keyboardStyles}>
      {/* Strong backlight glow under keyboard */}
      <div
        className="absolute inset-0 -bottom-4 opacity-20 blur-lg z-0 rounded-lg"
        style={keyboardGlowStyles}
      ></div>

      {/* Key rows */}
      <div className="relative z-10">
        <KeyRow keys={functionKeys} className="mb-1" />
        <KeyRow keys={numberKeys} className="mb-1" />
        <KeyRow keys={topRowKeys} className="mb-1" />
        <KeyRow keys={homeRowKeys} className="mb-1" />
        <KeyRow keys={bottomRowKeys} className="mb-1" />
        <div className="flex items-end justify-between">
          <div className="flex-1">
            <KeyRow keys={spaceRowKeys} />
          </div>
          <div className="flex flex-col mr-2">
            {/* Arrow keys - upper row */}
            <div
              className="flex justify-center"
              style={{ marginBottom: "2px" }}
            >
              <Key keyData={arrowKeys[0].keys[0]} />
            </div>
            {/* Arrow keys - lower row */}
            <div className="flex justify-center">
              {arrowKeys[1].keys.map((key, index) => (
                <Key key={index} keyData={key} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
