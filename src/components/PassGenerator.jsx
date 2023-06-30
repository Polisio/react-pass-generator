import { useState } from "react";

function PassGenerator() {
    const [password, setPassword] = useState ('Generador de contraseñas V1.0')

    const generatePassword = ()=>{
        console.log("Enter to generate password");
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!$%&/()=?¿¡@#";

        let newPassword = "";
        const passwordLenght = 10;

        for (let index = 0; index < passwordLenght; index++) {
            const randomIndex =Math.floor(Math.random() * chars.length)
            newPassword += chars [randomIndex];
        }
        setPassword(newPassword)
    }

    const copyToClipBoard = ()=> {
        console.log("enter to clipboard function");
        navigator.clipboard.writeText(password)
        alert("Password copied to clipboard!!!")
    }








    return ( 
        <div className="container">
            <p className="password" onClick={copyToClipBoard}>{password}</p>
            <button className="button" onClick={generatePassword}>Generar contraseña</button>
            <br/>
            <small>Clic to copi password</small>
        </div>
    );
}

export default PassGenerator;