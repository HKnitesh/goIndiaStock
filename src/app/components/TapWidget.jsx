

export default function TapWidget() {
    return (
        <div >
            <iframe
                src='https://s.tradingview.com/embed-widget/ticker-tape/'
                style={{
                    boxSizing: "border-box",
                    display: "block",
                    height: "46px",
                    width: "100%",
                    color: "red",
                    
                }}
            />
        </div>

    );
}


