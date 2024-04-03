import { styled } from "styled-components"

const AvatarStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
        display: block;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Img = styled.img`
    width: ${($width) => $width || ""};
    height: ${($width) => $width || ""};
`

export default function Avatar({ className, style, image, alt, width }) {
    return (
        <AvatarStyled className={className} style={style}>
            <Img src={image} alt={alt} $width={width} />
        </AvatarStyled>
    )
}
