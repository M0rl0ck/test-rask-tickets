import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

interface WrapperTransitionProps {
  children: React.ReactNode;
  id: string;
  Styles: CSSModuleClasses;
}

function WrapperTransition({
  children,
  id,
  Styles,
  ...rest
}: WrapperTransitionProps) {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      {...rest}
      key={id}
      ref={nodeRef}
      timeout={500}
      classNames={{
        ...Styles,
      }}
    >
      <div ref={nodeRef}>{children}</div>
    </CSSTransition>
  );
}

export { WrapperTransition };
