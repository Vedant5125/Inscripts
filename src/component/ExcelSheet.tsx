import { useState, useRef, useEffect } from "react";

const ExcelSheet = () => {
  const rowCount = 40;
  const colCount = 9;
  const rows = Array.from({ length: rowCount });

  
  const style = () => {
    return "w-[124px] p-[8px] border-[1px] border-[#EEE] hover:cursor-default outline-[#CCC]";
  };

  const [values, setValues] = useState<string[]>(Array(40).fill(""));
  const [statusValues, setStatusValues] = useState<string[]>(
    Array(40).fill("")
  );
  const [editingStatusIndex, setEditingStatusIndex] = useState<number | null>(
    null
  );
  const [focusedCell, setFocusedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);

  const cellRefs = useRef<HTMLInputElement[][]>([]);
  if (cellRefs.current.length !== rowCount) {
    cellRefs.current = Array.from(
      { length: rowCount },
      () => new Array(colCount)
    );
  }

  useEffect(() => {
    if (focusedCell) {
      const ref = cellRefs.current[focusedCell.row][focusedCell.col];
      if (ref) ref.focus();
    }
  }, [focusedCell]);


  const handleEnterKey = (
    e: React.KeyboardEvent<HTMLInputElement>,
    row: number,
    col: number
  ) => {
    if (e.key === "Enter") {
      e.currentTarget.blur();
    }
    if (e.key === "ArrowDown" && row < rowCount - 1) {
      setFocusedCell({ row: row + 1, col });
    } else if (e.key === "ArrowUp" && row > 0) {
      setFocusedCell({ row: row - 1, col });
    } else if (e.key === "ArrowRight" && col < colCount - 1) {
      setFocusedCell({ row, col: col + 1 });
    } else if (e.key === "ArrowLeft" && col > 0) {
      setFocusedCell({ row, col: col - 1 });
    }
  };

  const handleChange = (index: number, newValue: string) => {
    const updatedValues = [...values];
    updatedValues[index] = newValue;
    setValues(updatedValues);
  };

  const handleBlur = (index: number) => {
    if (values[index] && !values[index].trim().endsWith("₹")) {
      const updatedValues = [...values];
      updatedValues[index] = `${values[index].trim()} ₹`;
      setValues(updatedValues);
    }
  };

  const handleStatusChange = (index: number, newValue: string) => {
    const updated = [...statusValues];
    updated[index] = newValue;
    setStatusValues(updated);
  };

  const handleStatusBlur = () => {
    setEditingStatusIndex(null);
  };

  const getStatusStyle = (status: string) => {
    const lower = status.toLowerCase();
    if (lower === "in-process") return "bg-[#FEF3D6] text-[#85640B]";
    if (lower === "need to start") return "bg-[#E2E8F0] text-[#475569]";
    if (lower === "complete") return "bg-[#D3F2E3] text-[#0A6E3D]";
    if (lower === "blocked") return "bg-[#FFE1DE] text-[#C22219]";
    return "";
  };
  const [priorityValues, setPriorityValues] = useState<string[]>(
    Array(40).fill("")
  );

  const getPriorityStyle = (priority: string) => {
    const lower = priority.toLowerCase();
    if (lower === "medium") return "text-[#C29210]";
    if (lower === "low") return "text-[#1A8CFF]";
    if (lower === "high") return "text-[#EF4D44]";
    return "";
  };

  return (
    <>
      {rows.map((_, index) => (
        <div key={index} className="w-[1440px] h-[32px] flex gap-[1px]">
          <div className="w-[32px] border-[1px] border-[#EEE] flex items-center justify-center">
            <div className="w-[6px] h-[20px] flex items-center justify-center">
              {index + 1}
            </div>
          </div>

          <input
            onKeyDown={(e) => handleEnterKey(e, index, 0)}
            onClick={() => setFocusedCell({ row: index, col: 0 })}
            ref={(el) => {
              if (el) cellRefs.current[index][0] = el;
            }}
            className={`${style()} text-left hover:bg-teal-50`}
            style={{ width: "256px" }}
          />

          <input
            onKeyDown={(e) => handleEnterKey(e, index, 1)}
            ref={(el) => {
              if (el) cellRefs.current[index][1] = el;
            }}
            onClick={() => setFocusedCell({ row: index, col: 1 })}
            className={`${style()} text-right hover:bg-teal-50`}
          />

          <div
            className={`${style()} text-center flex items-center justify-center relative group`}
            onClick={() => setEditingStatusIndex(index)}
          >
            {editingStatusIndex === index ? (
              <>
                <input
                  value={statusValues[index]}
                  onChange={(e) => handleStatusChange(index, e.target.value)}
                  onBlur={handleStatusBlur}
                  onKeyDown={(e) => handleEnterKey(e, index, 2)}
                  onClick={() => setFocusedCell({ row: index, col: 2 })}
                  ref={(el) => {
                    if (el) cellRefs.current[index][2] = el;
                  }}
                  autoFocus
                  className="w-full h-full outline-none text-center text-[12px] leading-[16px] font-normal tracking-wider"
                />
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-[2px] whitespace-nowrap text-[10px] text-gray-500 bg-white border border-[#ddd] px-2 py-[2px] rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-10">
                  Allowed values: In-process, Need to start, Complete, Blocked
                </div>
              </>
            ) : getStatusStyle(statusValues[index]) ? (
              <div
                className={`rounded-full px-2 py-[2px] text-[12px] leading-[16px] font-normal tracking-wider ${getStatusStyle(
                  statusValues[index]
                )}`}
              >
                {statusValues[index]}
              </div>
            ) : (
              <span className="text-[#AAA] text-[12px]"></span>
            )}
          </div>

          <input
            onKeyDown={(e) => handleEnterKey(e, index, 3)}
            ref={(el) => {
              if (el) cellRefs.current[index][3] = el;
            }}
            onClick={() => setFocusedCell({ row: index, col: 3 })}
            className={`${style()} text-left hover:bg-teal-50`}
          />
          <input
            onKeyDown={(e) => handleEnterKey(e, index, 4)}
            ref={(el) => {
              if (el) cellRefs.current[index][4] = el;
            }}
            onClick={() => setFocusedCell({ row: index, col: 4 })}
            type="url"
            className={`${style()} hover:bg-teal-50`}
          />
          <input
            onKeyDown={(e) => handleEnterKey(e, index, 5)}
            ref={(el) => {
              if (el) cellRefs.current[index][5] = el;
            }}
            onClick={() => setFocusedCell({ row: index, col: 5 })}
            className={`${style()} text-left hover:bg-teal-50`}
          />
          <input
            value={priorityValues[index]}
            onChange={(e) => {
              const updated = [...priorityValues];
              updated[index] = e.target.value;
              setPriorityValues(updated);
            }}
            onKeyDown={(e) => handleEnterKey(e, index, 6)}
            onClick={() => setFocusedCell({ row: index, col: 6 })}
            ref={(el) => {
              if (el) cellRefs.current[index][6] = el;
            }}
            className={`${style()} text-center text-[12px] leading-[16px] font-semibold tracking-wider hover:bg-teal-50 ${getPriorityStyle(
              priorityValues[index]
            )}`}
            style={{ width: "125px" }}
          />
          <input
            onKeyDown={(e) => handleEnterKey(e, index, 7)}
            onClick={() => setFocusedCell({ row: index, col: 7 })}
            ref={(el) => {
              if (el) cellRefs.current[index][7] = el;
            }}
            className={`${style()} text-right hover:bg-teal-50 `}
            style={{ width: "125px" }}
          />

          <input
            type="text"
            value={values[index]}
            onChange={(e) => handleChange(index, e.target.value)}
            onBlur={() => handleBlur(index)}
            onKeyDown={(e) => handleEnterKey(e, index, 8)}
            onClick={() => setFocusedCell({ row: index, col: 8 })}
            ref={(el) => {
              if (el) cellRefs.current[index][8] = el;
            }}
            className={`${style()} text-right hover:bg-teal-50 `}
          />

          <input className="w-[124px] p-[8px] border-x-[2px] border-dashed border-y-[1px] border-y-[#EEE] border-[#CCC] box-border" />
        </div>
      ))}
    </>
  );
};

export default ExcelSheet;
