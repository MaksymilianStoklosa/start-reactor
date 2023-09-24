import { useRunGame, TIMEOUT } from "@/hooks/useRunGame";
import { renderHook, act } from "@testing-library/react";

jest.useFakeTimers();

describe("run game hook", () => {
  it("should set active element", async () => {
    const { result } = renderHook(() => useRunGame({ password: 1, steps: 0 }));

    await act(async () => {
      jest.advanceTimersByTime(TIMEOUT);
    });

    expect(result.current.activePasswordElement).toBe(1);
  });

  it("should set null when step finish", async () => {
    const { result } = renderHook(() => useRunGame({ password: 12, steps: 2 }));

    await act(async () => {
      await jest.advanceTimersByTime(TIMEOUT);
      await jest.advanceTimersByTime(TIMEOUT);
    });

    expect(result.current.activePasswordElement).toBe(null);

    await act(async () => {
      await jest.advanceTimersByTime(TIMEOUT);
      await jest.advanceTimersByTime(TIMEOUT);
    });

    expect(result.current.activePasswordElement).toBe(null);
  });

  it("should change running status", async () => {
    const { result } = renderHook(() => useRunGame({ password: 1, steps: 0 }));

    expect(result.current.isRunning).toBe(true);

    await act(async () => {
      await jest.advanceTimersByTime(TIMEOUT);
      await jest.advanceTimersByTime(TIMEOUT);
    });

    expect(result.current.isRunning).toBe(false);
  });
});
