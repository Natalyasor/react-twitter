import "./index.css";

export default function Component({ children, className, style={}}) {
    return <div style={style} className={`${className}`}>{children}</div>
}