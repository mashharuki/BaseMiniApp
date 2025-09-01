import { Button, Card, Icon } from "@/components/common";

// Features 画面（静的な特徴リスト）
type FeaturesProps = {
  setActiveTab: (tab: string) => void;
};

/**
 * Features コンポーネント
 * @param param0 
 * @returns 
 */
export function Features({ setActiveTab }: FeaturesProps) {
  return (
    <div className="animate-fade-in space-y-6">
      <Card title="Key Features">
        <ul className="mb-4 space-y-3">
          <li className="flex items-start">
            <Icon name="check" className="mr-2 mt-1 text-[var(--app-accent)]" />
            <span className="text-[var(--app-foreground-muted)]">
              Minimalistic and beautiful UI design
            </span>
          </li>
          <li className="flex items-start">
            <Icon name="check" className="mr-2 mt-1 text-[var(--app-accent)]" />
            <span className="text-[var(--app-foreground-muted)]">
              Responsive layout for all devices
            </span>
          </li>
          <li className="flex items-start">
            <Icon name="check" className="mr-2 mt-1 text-[var(--app-accent)]" />
            <span className="text-[var(--app-foreground-muted)]">Dark mode support</span>
          </li>
          <li className="flex items-start">
            <Icon name="check" className="mr-2 mt-1 text-[var(--app-accent)]" />
            <span className="text-[var(--app-foreground-muted)]">OnchainKit integration</span>
          </li>
        </ul>
        <Button variant="outline" onClick={() => setActiveTab('home')}>
          Back to Home
        </Button>
      </Card>
    </div>
  );
}
