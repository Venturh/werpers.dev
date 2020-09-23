import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

type Props = {
  src?: string;
  alt?: string;
  cover?: boolean;
};

type ImgProps = {
  loaded: boolean;
};

const Image = ({ src, alt, cover }: Props) => {
  const lqip = `${src}&w=100&blur=200&fm=webp`;
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null!);
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, []);
  const aspectRatio = 16 / 3;
  return (
    <Wrapper cover={cover}>
      <div style={{ paddingBottom: `${100 / aspectRatio}%` }} />
      {lqip && (
        <Placeholder loaded={loaded} src={lqip} alt="" aria-hidden="true" />
      )}
      <LazyImage
        loading="lazy"
        loaded={loaded}
        src={src}
        alt={alt}
        ref={imgRef}
        onLoad={() => setLoaded(true)}
      />
    </Wrapper>
  );
};

export default Image;

const Wrapper = styled.div<Props>`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    object-fit: ${(p) => (p.cover ? "cover" : "contain")};
    transition: opacity 1200ms;
  }
`;

const Placeholder = styled.img<ImgProps>`
  opacity: ${(p) => (p.loaded ? "0" : "1")};
`;

const LazyImage = styled.img<ImgProps>`
  opacity: ${(p) => (p.loaded ? "1" : "0")};
`;
