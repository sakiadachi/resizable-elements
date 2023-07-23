import "./style/ResizeBar.css";

interface Props {
  on_mousedown: () => void;
  className: string;
}

export default function ResizeBar({ on_mousedown, className }: Props) {
  return (
    <div
      className={`${className} resize-bar absolute top-0 w-1 bg-black h-full`}
      onMouseDown={on_mousedown}
    />
  );
}
