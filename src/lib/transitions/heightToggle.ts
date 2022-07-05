export default function (node: HTMLElement, { duration }: { duration: number }) {
  const nodeHeight = node.offsetHeight;

  return {
    duration,
    css: (t: number) => {
      return `
      height: ${Math.trunc(nodeHeight * t)}px;
      `;
    }
  };
}
