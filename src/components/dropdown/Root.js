import React, { useContext, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

import { Context } from './Provider';
import { DropdownSection } from './Section';

export function DropdownRoot() {
    const { options, cachedId, getOptionById, targetId } = useContext(Context);

    const cachedOption = useMemo(() => getOptionById(cachedId), [
        cachedId,
        getOptionById,
    ]);

    let [width, height, x] = [0, 0, 0];


    if (cachedOption) {
        const { optionCenterX, contentDimensions } = cachedOption;

        width = contentDimensions?.width;
        height = contentDimensions?.height;
        x = optionCenterX - width / 2;
    }

    const [hovering, setHovering] = useState(false)

    const isActive = targetId !== null || hovering;



    return (
        <div style={{perspective:2000}}>
            <motion.div
                className="dropdown-root"
                animate={{
                    opacity: isActive ? 1 : 0,
                    rotateX: isActive ? 0 : -15,

                }}
                transition={{
                    opacity: { duration: 0.22, delay: 0.05 },
                    rotateX: { duration: 0.22, delay: 0.05 }
                }}
            >
                <motion.div
                    className="dropdown-container"
                    animate={{
                        x,
                        width,
                        height,
                    }}
                    onHoverStart={() => setHovering(true)}
                    onHoverEnd={() => setHovering(false)}
                >
                    <motion.div
                        animate={{
                            x: -x,
                        }}
                    >
                        {options.map((item) => (
                            < DropdownSection key={item.id} option={item} />
                        ))}
                    </motion.div>
                </motion.div>


                <DropdownArrow />
            </motion.div>
        </div>
    )
}

function DropdownArrow() {
    const { cachedId, getOptionById } = useContext(Context)

    const cachedOption = useMemo(() => getOptionById(cachedId), [
        cachedId,
        getOptionById,
    ]);

    const x = cachedOption ? cachedOption.optionCenterX : 0

    return (
        <motion.div
            className="dropdown-arrow"
            initial={{
                opacity: 0,


            }}
            animate={{
                x,
                pointerEvents: 'none',
                opacity: x > 0 ? 1 : 0
            }}
            transition={{
                ease: "easeOut",
                x: { duration: 0.22 }
            }}
        />
    )
}
