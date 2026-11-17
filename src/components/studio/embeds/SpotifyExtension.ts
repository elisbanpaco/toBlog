import { Node, mergeAttributes } from '@tiptap/core';
import type { CommandProps } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';
import SpotifyEmbedComponent from './SpotifyEmbedComponent';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    spotifyEmbed: {
      setSpotifyEmbed: (options: { src: string }) => ReturnType;
    };
  }
}

export const SpotifyEmbed = Node.create({
  name: 'spotifyEmbed',
  group: 'block',
  atom: true,
  draggable: true,

  addAttributes() {
    return {
      src: { default: null },
    };
  },

  parseHTML() {
    return [{ tag: 'div[data-spotify-embed]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes({ 'data-spotify-embed': '' }, HTMLAttributes)];
  },

  addNodeView() {
    return ReactNodeViewRenderer(SpotifyEmbedComponent);
  },

  addCommands() {
    return {
      setSpotifyEmbed: (options: { src: string }) => ({ commands }: CommandProps) => {
        return commands.insertContent({
          type: 'spotifyEmbed',
          attrs: options,
        });
      },
    };
  },
});
