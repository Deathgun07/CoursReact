export function input ({placeholder, value, onchange}){
    return <div>
        <input className="form-control" type="text" value={value} placeholder={placeholder} 
        onChange={(e)=> onchange(e.target.value)}
        />
    </div>
}