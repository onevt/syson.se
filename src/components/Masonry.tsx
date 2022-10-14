import { createSignal, JSXElement, onCleanup, onMount } from "solid-js";
import type { JSX, Component } from "solid-js";

const enum BreakpointColumns {
  small = 0, // 0px - 719px
  medium = 720,
  large = 1024,
}

const Masonry: Component<{
  children?: JSX.Element | JSX.Element[];
  class?: string;
  breakpointCols: {
    small: number; // default
    medium: number;
    large: number;
  };
  columnClassName: string;
  column?: Object; // ????
}> = ({ children, breakpointCols, column, columnClassName, ...rest }) => {
  const [columnCount, setColumnCount] = createSignal(breakpointCols.small || 2);

  const calculateColumnCount = () => {
    const width = window.innerWidth;
    if (width >= BreakpointColumns.large) {
      setColumnCount(breakpointCols.large);
    } else if (width >= BreakpointColumns.medium) {
      setColumnCount(breakpointCols.medium);
    } else {
      setColumnCount(breakpointCols.small);
    }
  };

  onMount(() => {
    calculateColumnCount();
    window.addEventListener("resize", calculateColumnCount);
  });

  onCleanup(() => {
    window.removeEventListener("resize", calculateColumnCount);
  });

  const itemsInColumns = () => {
    if (!Array.isArray(children)) return [];
    const columns: Array<Array<JSXElement>> = Array.from(
      { length: columnCount() },
      () => []
    );
    children.forEach((child, index) => {
      columns[index % columnCount()].push(child);
    });

    return columns;
  };

  const renderColumns = () => {
    const childrenInColumns = itemsInColumns();
    const width = `${100 / childrenInColumns.length}%`;

    return childrenInColumns.map((items, i) => {
      return (
        <div class={columnClassName} style={{ width }} {...column}>
          {items}
        </div>
      );
    });
  };
  return <div {...rest}>{renderColumns()}</div>;
};

export default Masonry;
