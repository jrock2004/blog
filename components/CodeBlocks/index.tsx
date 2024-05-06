'use client';
import { ReactNode, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

export function CodeBlocks({ children }: CodeBlocksProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return <div className="Code" dangerouslySetInnerHTML={{ __html: children }} />;
}

export interface CodeBlocksProps {
  children: ReactNode;
}
