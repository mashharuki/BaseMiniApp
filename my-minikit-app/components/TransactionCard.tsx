import { Card } from "@/components/common";
import { useNotification } from "@coinbase/onchainkit/minikit";
import {
  Transaction,
  TransactionButton,
  TransactionError,
  TransactionResponse,
  TransactionStatus,
  TransactionStatusAction,
  TransactionStatusLabel,
  TransactionToast,
  TransactionToastAction,
  TransactionToastIcon,
  TransactionToastLabel,
} from '@coinbase/onchainkit/transaction';
import { useCallback } from "react";
import { useAccount } from "wagmi";

type TransactionProps = {
  calls: {
    to: `0x${string}`;
    data: `0x${string}`;
    value: bigint;
  }[];
};


/**
 * トランザクションカードコンポーネント
 * @returns 
 */
export function TransactionCard({calls}: TransactionProps) {
  const { address } = useAccount();

  const sendNotification = useNotification();

  /**
   * トランザクションが正常に実行された時に実行するコールバック関数
   */
  const handleSuccess = useCallback(
    async (response: TransactionResponse) => {
      const transactionHash = response.transactionReceipts[0].transactionHash;

      console.log(`Transaction successful: ${transactionHash}`);

      // トランザクション成功時に MiniKit 通知を送る
      await sendNotification({
        title: 'Congratulations!',
        body: `You sent your a transaction, ${transactionHash}!`,
      });
    },
    [sendNotification]
  );

  return (
    <Card title="Make Your First Transaction">
      <div className="space-y-4">
        <p className="mb-4 text-[var(--app-foreground-muted)]">
          Experience the power of seamless sponsored transactions with{' '}
          <a
            href="https://onchainkit.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0052FF] hover:underline"
          >
            OnchainKit
          </a>
          .
        </p>

        <div className="flex flex-col items-center">
          {address ? (
            <Transaction
              calls={calls}
              onSuccess={handleSuccess}
              onError={(error: TransactionError) => console.error('Transaction failed:', error)}
            >
              <TransactionButton className="text-md text-white" />
              <TransactionStatus>
                <TransactionStatusAction />
                <TransactionStatusLabel />
              </TransactionStatus>
              <TransactionToast className="mb-4">
                <TransactionToastIcon />
                <TransactionToastLabel />
                <TransactionToastAction />
              </TransactionToast>
            </Transaction>
          ) : (
            <p className="mt-2 text-center text-sm text-yellow-400">
              Connect your wallet to send a transaction
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}
