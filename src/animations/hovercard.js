import * as THREE from 'three'

export const animateScale = (object, targetScale) => {
    let frameId
    const speed = 0.1

    const step = () => {
        if (!object || !object.scale) return

        object.scale.lerp(targetScale, speed)

        if (
            Math.abs(object.scale.x - targetScale.x) < 0.01 &&
            Math.abs(object.scale.y - targetScale.y) < 0.01 &&
            Math.abs(object.scale.z - targetScale.z) < 0.01
        ) {
            object.scale.copy(targetScale)
            cancelAnimationFrame(frameId)
            return
        }

        frameId = requestAnimationFrame(step)
    }

    frameId = requestAnimationFrame(step)
}

export const handlePointerEnter = (event) => {
    event.stopPropagation()
    animateScale(event.object, new THREE.Vector3(1.2, 1.2, 1.2)) // Zoom in this card
}

export const handlePointerLeave = (event) => {
    event.stopPropagation()
    animateScale(event.object, new THREE.Vector3(1, 1, 1)) // Reset zoom
}