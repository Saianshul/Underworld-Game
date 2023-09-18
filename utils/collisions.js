export function collisionDetected(polygonA, polygonB) {
    const pointsA = polygonA.points;
    const pointsB = polygonB.points;

    for (let i = 0; i < pointsA.length; i++) {
        for (let j = 0; j < pointsB.length; j++) {
            const pointA1 = pointsA[i];
            const pointA2 = i === pointsA.length - 1 ? pointsA[0] : pointsA[i + 1];
            const pointB1 = pointsB[j];
            const pointB2 = j === pointsB.length - 1 ? pointsB[0] : pointsB[j + 1];

            if (doLineSegmentsIntersect(pointA1, pointA2, pointB1, pointB2)) {
                return true;
            }
        }
    }

    return false;
}

export function doLineSegmentsIntersect(p1, p2, p3, p4) {
    const x1 = p1.x;
    const y1 = p1.y;
    const x2 = p2.x;
    const y2 = p2.y;
    const x3 = p3.x;
    const y3 = p3.y;
    const x4 = p4.x;
    const y4 = p4.y;

    const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
    const ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));

    return ua >= 0 && ua <= 1 && ub >= 0 && ub <= 1;
}