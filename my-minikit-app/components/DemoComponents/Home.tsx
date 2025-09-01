import { TransactionCard } from "@/components/TransactionCard";
import { useMemo } from "react";
import { useAccount } from "wagmi";

/**
 * Home コンポーネント
 * @param param0 
 * @returns 
 */
export function Home() {
  const { address } = useAccount();

  // 送金例：自分自身へ 0 ETH を送るコールデータ（デモ用）
  // ここでは送金処理だが NFTをミントさせたいときなどはコントラクトのメソッド呼び出しデータをセットする
  const calls = useMemo(
    () =>
      address
        ? [
            {
              to: address,
              data: '0x' as `0x${string}`,
              value: BigInt(0),
            },
          ]
        : [],
    [address]
  );
  
  return (
    <div className="animate-fade-in space-y-6">
      {/* トランザクションカード コンポーネント */}
      <TransactionCard calls={calls}/>
    </div>
  );
}
