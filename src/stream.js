import { ResponsiveStream } from "@nivo/stream";
import { streamData } from "./streamData";

const Stream = () =>
{ 
    return (
        <div style={{ height: '400px' }}>
            <h2>My Awesome Stream</h2>
            <ResponsiveStream
                data={streamData}
                keys={["Ronaldo", "Neymar", "Messi"]}
                margin={{ top: 50, right: 180, bottom: 50, left: 100 }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: "bottom",
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Number of Years Playing",
                    legendOffset: -40,
                }}

                offsetType="silhouette"
                colors={{ scheme: 'accent' }}
                fillOpacity={0.8}
                borderColor={{ from: 'color', modifiers: [['darker', 0.7]] }}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        translateX: 100,
                        itemWidth: 80,
                        itemHeight: 20,
                        itemTextColor: '#999',
                        symbolSize: 12,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000',
                                }
                            }
                        ]
                    }
                ]}
            />
            <footer>
                <p>Representing football goals stats with Nivo Stream</p>
                <p
                    style={{
                        fontStyle: 'oblique',
                        marginTop: '.5rem',
                }}
                >
                    PS: Not real stats
                </p>
            </footer>
        </div>
    )
}

export default Stream;