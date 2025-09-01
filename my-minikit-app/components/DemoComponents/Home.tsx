import { Button, Card, Icon } from "@/components/common";
import { TodoList } from "@/components/TodoList";
import { TransactionCard } from "@/components/TransactionCard";
import { useMemo } from "react";
import { useAccount } from "wagmi";

// Home 画面（説明とサンプル機能）
type HomeProps = {
  setActiveTab: (tab: string) => void;
};

/**
 * Home コンポーネント
 * @param param0 
 * @returns 
 */
export function Home({ setActiveTab }: HomeProps) {
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
      <Card title="My First Mini App">
        <p className="mb-4 text-[var(--app-foreground-muted)]">
          This is a minimalistic Mini App built with OnchainKit components.
        </p>
        <Button
          onClick={() => setActiveTab('features')}
          icon={<Icon name="arrow-right" size="sm" />}
        >
          Explore Features
        </Button>
      </Card>
      {/* TODO リスト コンポーネント */}
      <TodoList />
      {/* トランザクションカード コンポーネント */}
      <TransactionCard calls={calls}/>
    </div>
  );
}
