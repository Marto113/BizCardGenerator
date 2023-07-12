import html2canvas from "html2canvas";

export function getImage(divClassName: string){
    const divElement = document.querySelector(`.${divClassName}`) as HTMLElement;

    if(!divElement){
        return;
    }

    html2canvas(divElement).then((canvas) => {
        const image = canvas.toDataURL('image/png');

        const link = document.createElement('a');
        link.href = image;
        link.download = 'business-card.png';
        
        link.click();
    }).catch((error) => {
        console.error('Error', error);
    });
}