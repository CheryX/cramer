import React, {useRef, useEffect} from 'react'

//https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
const Graph = ({ fun, p, height }) => {
    const canvasRef = useRef(null)

    useEffect(() => {

        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        let w = canvas.width; let h = canvas.height;

        ctx.clearRect(0, 0, w, h)
        ctx.lineWidth = "1"

        ctx.strokeStyle = "#9381FF"
        ctx.setLineDash([4,4])
        ctx.beginPath()
        for (let i = 0; i<w; i+=30) {
            ctx.moveTo(i+w/2-30*Math.floor(w/2/30), 0)
            ctx.lineTo(i+w/2-30*Math.floor(w/2/30), h)
        }
        ctx.stroke()
        ctx.beginPath()
        for (let i = 0; i<h; i+=30) {
            ctx.moveTo(0, i+h/2-30*Math.floor(h/2/30))
            ctx.lineTo(w, i+h/2-30*Math.floor(h/2/30))
        }
        ctx.stroke()

        ctx.strokeStyle = "#41EAD4"
        ctx.lineWidth = "2"
        ctx.setLineDash([])

        ctx.beginPath()
        ctx.moveTo(w/2,0)
        ctx.lineTo(w/2,h)
        ctx.moveTo(0,h/2)
        ctx.lineTo(w,h/2)
        ctx.stroke()

        //? rendering graph
        ctx.strokeStyle = "#FDFFFC"
        ctx.lineWidth = "4"
        ctx.beginPath()
        for (let tempx = -w/2; tempx<w/2; tempx++) {
            let x = tempx/30
            if (eval(fun)>15) {
                ctx.stroke(); ctx.beginPath()
            } else {
                ctx.lineTo(tempx+w/2,-eval(fun)*30+h/2)
            }
        }
        ctx.stroke()

        ctx.fillStyle = "#FDFFFC"
        if (p!=undefined) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            p = JSON.parse(p)
            for (let i in p) {
                ctx.beginPath()
                ctx.arc(p[i][0]+w/2, p[i][1]+h/2, 8, 0, 2 * Math.PI);
                console.log("jooooo xD ",p[i])
                ctx.fill()
            }
        }

    }, [])

    return (
        <canvas ref={canvasRef}  width="800" height={height==undefined ? 600 : height} style={{width:"100%", borderRadius:"0.4rem", backgroundColor:"#011627"}}/>
    )
}

export default Graph