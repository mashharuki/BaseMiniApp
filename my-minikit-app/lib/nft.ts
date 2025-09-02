import { SHOOTING_GAME_NFT_ABI } from '@/utils/abis';
import { encodeFunctionData } from 'viem';

/**
 * NFTをミントするためのメソッドのエンコードデータを生成するメソッド
 */
export const createMintNftCallData = (to: `0x${string}`, tokenId: number, amount: number) => {
  // NFTをミントするためのメソッドのエンコードデータを生成する
  return encodeFunctionData({
    functionName: 'mint',
    abi: SHOOTING_GAME_NFT_ABI,
    args: [to, tokenId, amount, '0x'],
  });
};
