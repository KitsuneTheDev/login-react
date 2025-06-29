function SubmitButton() {}

SubmitButton.Default = () => {
    return(<button
        type="submit"
        className="submit-button w-[50%] bg-text text-background-primary rounded-xl outline-2 outline-background-secondary outline-offset-2
        hover:cursor-pointer disabled:bg-background-secondary/50 disabled:hover:cursor-default">
            Create Account
    </button>);
}

SubmitButton.Disabled = () => {
    return(<button
        type="submit" disabled
        className="submit-button w-[50%] bg-text text-background-primary rounded-xl outline-2 outline-background-secondary outline-offset-2
        hover:cursor-pointer disabled:bg-background-secondary/50 disabled:hover:cursor-default">
            Create Account
    </button>);
}

export default SubmitButton;