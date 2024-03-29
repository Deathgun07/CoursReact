export function Checkbox({checked, onchange, label}){
    return <div className="form-check">
        <input type="checkbox" 
        id={id}
        className="form-check-input"
        checked={checked}
        onChange={(e)=> onchange(e.target.checked)}
        />
        <label htmlFor="{id}" className="form-check-label">{label}</label>
    </div>
}