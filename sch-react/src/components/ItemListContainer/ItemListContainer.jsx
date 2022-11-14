import { useState } from "react"

const ItemListContainer = (obj) => {
    const [count, setCount] = useState(0)

    const sumar = () => {
        setCount(count + 1)
    }

    return (
        <div>
            {count}
            <button onClick={sumar}> + </button>
        </div>
    )
}

export default ItemListContainer