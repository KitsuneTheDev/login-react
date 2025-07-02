function SubmitButton() {}

SubmitButton.Default = ({ context }) => {
    return(<button
        type="submit"
        className="submit-button w-[50%] bg-background-secondary text-text text-lg font-medium rounded-xl outline-2 outline-background-secondary outline-offset-2 shadow-[0_0_40px] shadow-background-secondary/70
        hover:cursor-pointer disabled:bg-background-secondary/50 disabled:hover:cursor-default">
            {context}
    </button>);
}

SubmitButton.Disabled = ({ context }) => {
    return(<button
        type="submit" disabled
        className="submit-button w-[50%] bg-background-secondary text-text text-lg font-medium rounded-xl outline-2 outline-background-secondary outline-offset-2 shadow-[0_0_40px] shadow-background-secondary/70
        hover:cursor-pointer disabled:bg-background-secondary/50 disabled:hover:cursor-default">
            {context}
    </button>);
}

export default SubmitButton;