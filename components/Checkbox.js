const Checkbox = ({text}) => (
    <div className="parent">
        <div className="checkboxStyle">
            <input type="checkbox" name={text} id={text} />
            <label htmlFor={text}><span>{text}</span></label>
        </div>
        <style jsx>
        {`
            div.parent {
                display: flex;
                justify-content: center;
            }

            input[type=checkbox]:checked + label span {
                text-decoration: line-through;
            }

            input[type=checkbox] {
                visibility: hidden;
            }

            span {
                position: absolute;
                left: 35px;
                top: -5px;
                font-size: 30px;
                font-weight: bold;
            }

            .checkboxStyle {
                position: relative;
            }

            .checkboxStyle label {
                cursor: pointer;
                position: absolute;
                width: 25px;
                height: 25px;
                top: 0;
                  left: 0;
                background: #eee;
                border:1px solid #ddd;
            }

            /**
             * Display the tick inside the checkbox
             */
            .checkboxStyle label:after {
                opacity: 0.2;
                content: '';
                position: absolute;
                width: 9px;
                height: 5px;
                background: transparent;
                top: 6px;
                left: 7px;
                border: 3px solid #333;
                border-top: none;
                border-right: none;
            
                transform: rotate(-45deg);
            }

            /**
             * Create the hover event of the tick
             */
            .checkboxStyle label:hover::after {
                opacity: 0.5;
            }
            
            /**
             * Create the checkbox state for the tick
             */
            .checkboxStyle input[type=checkbox]:checked + label:after {
                opacity: 1;
            }
        `}  
        </style>
    </div>
)

export default Checkbox