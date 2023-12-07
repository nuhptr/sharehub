import "./card.css"

export default function Card({ className, children, style }) {
   return (
      <div className={`card ${className}`} style={style}>
         {children}
      </div>
   )
}
