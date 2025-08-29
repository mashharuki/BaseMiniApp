'use client';

import { useMiniKit, useAddFrame, useOpenUrl } from '@coinbase/onchainkit/minikit';
import { Name, Identity, Address, Avatar, EthBalance } from '@coinbase/onchainkit/identity';
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet';
import { useEffect, useMemo, useState, useCallback } from 'react';
import { Button } from './components/DemoComponents';
import { Icon } from './components/DemoComponents';
import { Home } from './components/DemoComponents';
import { Features } from './components/DemoComponents';

export default function App() {
  const { setFrameReady, isFrameReady, context } = useMiniKit();
  const [frameAdded, setFrameAdded] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const addFrame = useAddFrame();
  const openUrl = useOpenUrl();

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  const handleAddFrame = useCallback(async () => {
    const frameAdded = await addFrame();
    setFrameAdded(Boolean(frameAdded));
  }, [addFrame]);

  const saveFrameButton = useMemo(() => {
    if (context && !context.client.added) {
      return (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleAddFrame}
          className="p-4 text-[var(--app-accent)]"
          icon={<Icon name="plus" size="sm" />}
        >
          Save Frame
        </Button>
      );
    }

    if (frameAdded) {
      return (
        <div className="flex animate-fade-out items-center space-x-1 text-sm font-medium text-[#0052FF]">
          <Icon name="check" size="sm" className="text-[#0052FF]" />
          <span>Saved</span>
        </div>
      );
    }

    return null;
  }, [context, frameAdded, handleAddFrame]);

  return (
    <div className="mini-app-theme flex min-h-screen flex-col from-[var(--app-background)] to-[var(--app-gray)] font-sans text-[var(--app-foreground)]">
      <div className="mx-auto w-full max-w-md px-4 py-3">
        <header className="mb-3 flex h-11 items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <Wallet className="z-10">
                <ConnectWallet>
                  <Name className="text-inherit" />
                </ConnectWallet>
                <WalletDropdown>
                  <Identity className="px-4 pb-2 pt-3" hasCopyAddressOnClick>
                    <Avatar />
                    <Name />
                    <Address />
                    <EthBalance />
                  </Identity>
                  <WalletDropdownDisconnect />
                </WalletDropdown>
              </Wallet>
            </div>
          </div>
          <div>{saveFrameButton}</div>
        </header>

        <main className="flex-1">
          {activeTab === 'home' && <Home setActiveTab={setActiveTab} />}
          {activeTab === 'features' && <Features setActiveTab={setActiveTab} />}
        </main>

        <footer className="mt-2 flex justify-center pt-4">
          <Button
            variant="ghost"
            size="sm"
            className="text-xs text-[var(--ock-text-foreground-muted)]"
            onClick={() => openUrl('https://base.org/builders/minikit')}
          >
            Built on Base with MiniKit
          </Button>
        </footer>
      </div>
    </div>
  );
}
