import { useContext } from "react";
import "./input-field.css";
import { Context } from "../../context/Context";

const InputField = () => {
    const { searchQuery, handleChangeSearchQuery } = useContext(Context);
    return (
        <input value={searchQuery} onChange={(e) => handleChangeSearchQuery(e.target.value)} type="text" className="input-field" />
    )
}

export default InputField;