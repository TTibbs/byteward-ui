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
  keys: KeyData[]; // Array of keys
  className?: string; // Tailwind class
};

export default function MacBookKeyboard({
  keyColor = "bg-indigo-700",
  textColor = "text-zinc-200",
  glowColor = "rgba(256, 256, 256, 0.7)",
  buttonBgColor = "bg-zinc-800",
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
    { id: "touchid", text: "", width: "w-14", label: "Touch ID" },
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
    { id: "delete", text: "⌫", width: "w-20", textSize: "text-base" },
  ];

  const topRowKeys: KeyData[] = [
    { id: "tab", text: "⇥", width: "w-[88px]", textSize: "text-base" },
    { id: "q", text: "Q", width: "w-14", textSize: "text-base" },
    { id: "w", text: "W", width: "w-14", textSize: "text-base" },
    { id: "e", text: "E", width: "w-14", textSize: "text-base" },
    { id: "r", text: "R", width: "w-14", textSize: "text-base" },
    { id: "t", text: "T", width: "w-14", textSize: "text-base" },
    { id: "y", text: "Y", width: "w-14", textSize: "text-base" },
    { id: "u", text: "U", width: "w-14", textSize: "text-base" },
    { id: "i", text: "I", width: "w-14", textSize: "text-base" },
    { id: "o", text: "O", width: "w-14", textSize: "text-base" },
    { id: "p", text: "P", width: "w-14", textSize: "text-base" },
    {
      id: "bracketleft",
      text: "[",
      symbol: "{",
      width: "w-14",
      textSize: "text-base",
    },
    {
      id: "bracketright",
      text: "]",
      symbol: "}",
      width: "w-14",
      textSize: "text-base",
    },
    {
      id: "backslash",
      text: "\\",
      symbol: "|",
      width: "w-14",
      textSize: "text-base",
    },
  ];

  const homeRowKeys: KeyData[] = [
    { id: "capslock", text: "⇪", width: "w-24", textSize: "text-base" },
    { id: "a", text: "A", width: "w-14", textSize: "text-base" },
    { id: "s", text: "S", width: "w-14", textSize: "text-base" },
    { id: "d", text: "D", width: "w-14", textSize: "text-base" },
    { id: "f", text: "F", width: "w-14", textSize: "text-base" },
    { id: "g", text: "G", width: "w-14", textSize: "text-base" },
    { id: "h", text: "H", width: "w-14", textSize: "text-base" },
    { id: "j", text: "J", width: "w-14", textSize: "text-base" },
    { id: "k", text: "K", width: "w-14", textSize: "text-base" },
    { id: "l", text: "L", width: "w-14", textSize: "text-base" },
    { id: "semicolon", text: ";", symbol: ":", width: "w-14" },
    { id: "quote", text: "'", symbol: '"', width: "w-14" },
    { id: "return", text: "↵", width: "w-24", textSize: "text-base" },
  ];

  const bottomRowKeys: KeyData[] = [
    { id: "shiftleft", text: "⇧", width: "w-20", textSize: "text-base" },
    {
      id: "backtick",
      text: "`",
      symbol: "~",
      width: "w-14",
      textSize: "text-base",
    },
    { id: "z", text: "Z", width: "w-14", textSize: "text-base" },
    { id: "x", text: "X", width: "w-14", textSize: "text-base" },
    { id: "c", text: "C", width: "w-14", textSize: "text-base" },
    { id: "v", text: "V", width: "w-14", textSize: "text-base" },
    { id: "b", text: "B", width: "w-14", textSize: "text-base" },
    { id: "n", text: "N", width: "w-14", textSize: "text-base" },
    { id: "m", text: "M", width: "w-14", textSize: "text-base" },
    {
      id: "comma",
      text: ",",
      symbol: "<",
      width: "w-14",
      textSize: "text-base",
    },
    {
      id: "period",
      text: ".",
      symbol: ">",
      width: "w-14",
      textSize: "text-base",
    },
    {
      id: "slash",
      text: "/",
      symbol: "?",
      width: "w-14",
      textSize: "text-base",
    },
    { id: "shiftright", text: "⇧", width: "w-36", textSize: "text-base" },
  ];

  const spaceRowKeys: KeyData[] = [
    { id: "fn", text: "🌐", symbol: "fn", width: "w-12" },
    {
      id: "controlleft",
      text: "control",
      symbol: "⌃",
      textSize: "text-xs",
      label: "control",
      width: "w-14",
    },
    {
      id: "optionleft",
      text: "option",
      symbol: "⌥",
      textSize: "text-xs",
      label: "option",
      width: "w-14",
    },
    {
      id: "commandleft",
      text: "command",
      symbol: "⌘",
      textSize: "text-xs",
      label: "command",
      width: "w-[72px]",
    },
    { id: "space", text: "", width: "w-72" },
    {
      id: "commandright",
      text: "command",
      symbol: "⌘",
      textSize: "text-xs",
      label: "command",
      width: "w-20",
    },
    {
      id: "optionright",
      text: "option",
      symbol: "⌥",
      textSize: "text-xs",
      label: "option",
      width: "w-14",
    },
  ];

  // Separate arrow key layout
  const arrowKeys: ArrowKeyRow[] = [
    // Top row - just the up arrow
    {
      keys: [
        { id: "arrowup", text: "▲", width: "w-[33px]", textSize: "text-xs" },
      ],
      className: "mb-0.5",
    },
    // Bottom row - left, down, right arrows
    {
      keys: [
        { id: "arrowleft", text: "◀", width: "w-[33px]", textSize: "text-xs" },
        { id: "arrowdown", text: "▼", width: "w-[33px]", textSize: "text-xs" },
        { id: "arrowright", text: "▶", width: "w-[33px]", textSize: "text-xs" },
      ],
      className: "",
    },
  ];

  // Handle key press
  const handleKeyPress = (id: string) => {
    setPressedKeys((prev) => ({ ...prev, [id]: true }));
  };

  // Handle key release
  const handleKeyRelease = (id: string) => {
    setPressedKeys((prev) => ({ ...prev, [id]: false }));
  };

  // Check if a value is a valid CSS color (not a Tailwind class)
  const isCssColor = (value: string): boolean => {
    if (!value) return false;

    // If it has Tailwind prefix, it's not a CSS color
    if (value.startsWith("bg-") || value.startsWith("text-")) {
      return false;
    }

    // Check for hex colors, rgb, rgba, hsl, etc.
    return (
      value.startsWith("#") ||
      value.startsWith("rgb") ||
      value.startsWith("rgba") ||
      value.startsWith("hsl") ||
      value.startsWith("hsla") ||
      // Basic CSS color names - only match exact color names, not when part of longer strings
      ([
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
      ].includes(value) &&
        !value.includes("-"))
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
      label,
    } = keyData;
    const isPressed: boolean = pressedKeys[id];

    // Check if key is the Touch ID key
    const isTouchID = id === "touchid";

    // Check if key is in the bottom row (space row)
    const isBottomRowKey = [
      "fn",
      "controlleft",
      "optionleft",
      "commandleft",
      "space",
      "commandright",
      "optionright",
    ].includes(id);

    // Check if key is a special key that needs bottom-left text alignment
    const isBottomLeftTextKey = ["fn", "tab", "capslock", "shiftleft"].includes(
      id
    );

    // Check if key is a special key that needs bottom-right text alignment
    const isBottomRightTextKey = ["delete", "shiftright"].includes(id);

    const isArrowKey = [
      "arrowup",
      "arrowdown",
      "arrowleft",
      "arrowright",
    ].includes(id);

    // Use a more precise height for arrow keys (2px less than h-6)
    const keyHeight: string = isArrowKey ? "h-[21px]" : height;

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

    // Use cn utility with conditional classes for better readability and maintenance
    const buttonClassName = cn(
      width,
      keyHeight,
      "border border-gray-800 rounded-md flex flex-col items-center justify-center relative m-0.5 shadow-md overflow-hidden cursor-pointer transition-all duration-100",
      // Only apply Tailwind background color if it's not a CSS color
      !isCssColor(effectiveButtonColor) && effectiveButtonColor
    );

    // Use cn utility for text classes as well
    const textClassName = cn(
      textSize,
      "z-10",
      // Only apply Tailwind text color if it's not a CSS color
      !isCssColor(textColor) && textColor
    );

    return (
      <div
        className={buttonClassName}
        style={keyStyles}
        onMouseDown={() => handleKeyPress(id)}
        onMouseUp={() => handleKeyRelease(id)}
        onMouseLeave={() => handleKeyRelease(id)}
      >
        {/* Special case for Touch ID */}
        {isTouchID ? (
          <>
            <div className="relative w-7 h-7 rounded-full border border-gray-400 overflow-hidden flex items-center justify-center">
              {/* Touch ID ring */}
              <div className="absolute inset-0 border-2 border-gray-400 rounded-full opacity-30"></div>
              {/* Touch ID center */}
              <div
                className={cn(
                  "w-6 h-6 rounded-full",
                  // Use key color for Touch ID if available
                  !isCssColor(effectiveButtonColor) && effectiveButtonColor
                    ? effectiveButtonColor.replace("bg-", "bg-opacity-80 bg-")
                    : "bg-gray-700 bg-opacity-80"
                )}
                style={
                  isCssColor(effectiveButtonColor)
                    ? { backgroundColor: effectiveButtonColor, opacity: 0.8 }
                    : {}
                }
              ></div>
              {/* Touch ID glow */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: `inset 0 0 4px 1px ${glowColor.replace(
                    "0.7",
                    "0.3"
                  )}`,
                }}
              ></div>
            </div>
            {/* Screen reader only label for accessibility */}
            {label && <span className="sr-only">{label}</span>}
          </>
        ) : (
          <>
            {/* Regular key content - existing code for normal keys */}
            {/* Strong backlit glow effect */}
            <div
              className="absolute inset-0 opacity-10 z-0"
              style={glowStyles}
            ></div>

            {/* Key light edge effect */}
            <div className="absolute inset-0 border-t border-blue-200 opacity-5 z-0"></div>

            {/* Different rendering based on key type */}
            {symbol && !isBottomRowKey ? (
              // For keys with symbols (except bottom row) - use flex layout with centered symbols
              <div className="flex flex-col items-center justify-center space-y-1 h-full">
                <span
                  className="text-xs z-10"
                  style={{
                    color: "#9ca3af",
                    textShadow: `0 0 5px ${glowColor}`,
                  }}
                >
                  {symbol}
                </span>
                <span
                  className={cn(
                    textClassName,
                    // Special positioning for bottom-left text keys
                    isBottomLeftTextKey ? "absolute bottom-1 left-1" : "",
                    // Special positioning for bottom-right text keys
                    isBottomRightTextKey ? "absolute bottom-1 right-1" : "",
                    // Add margin-top for space row keys to move text down (except special keys)
                    isBottomRowKey &&
                      !isBottomLeftTextKey &&
                      !isBottomRightTextKey &&
                      "mt-3"
                  )}
                  style={textStyles}
                >
                  {text}
                </span>
              </div>
            ) : (
              // For bottom row keys - keep left/right positioning for symbols
              <>
                {symbol && (
                  <span
                    className={cn(
                      "text-xs absolute top-1 z-10",
                      // Position symbols on left or right for modifier keys
                      id.endsWith("right") ? "left-1" : "right-1"
                    )}
                    style={{
                      color: "#9ca3af",
                      textShadow: `0 0 5px ${glowColor}`,
                    }}
                  >
                    {symbol}
                  </span>
                )}
                <span
                  className={cn(
                    textClassName,
                    // Special positioning for bottom-left text keys
                    isBottomLeftTextKey ? "absolute bottom-1 left-1" : "",
                    // Special positioning for bottom-right text keys
                    isBottomRightTextKey ? "absolute bottom-1 right-1" : "",
                    // Add margin-top for space row keys to move text down (except special keys)
                    isBottomRowKey &&
                      !isBottomLeftTextKey &&
                      !isBottomRightTextKey &&
                      "mt-3"
                  )}
                  style={textStyles}
                >
                  {text}
                </span>
              </>
            )}

            {/* Character glow effect */}
            <div
              className={cn(
                "absolute inset-0 flex",
                // For special keys with bottom-left text, position glow accordingly
                isBottomLeftTextKey
                  ? "items-end justify-start pl-2 pb-2"
                  : // For special keys with bottom-right text, position glow accordingly
                  isBottomRightTextKey
                  ? "items-end justify-end pr-2 pb-2"
                  : "items-center justify-center"
              )}
            >
              <span
                className={`${textSize} opacity-30 blur-sm z-0`}
                style={{
                  color: "#93c5fd",
                  filter: "blur(3px)",
                  transform: "scale(1.2)",
                }}
              >
                {text}
              </span>
            </div>
          </>
        )}
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
