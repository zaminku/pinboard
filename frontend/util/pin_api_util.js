export const fetchPins = () => (
    $.ajax({
        method: 'GET',
        url: '/api/pins',
    })
)

export const fetchPin = pinId => (
    $.ajax({
        method: 'GET',
        url: `/api/pins/${pinId}`
    })
)

export const createPin = pin => (
    $.ajax({
        method: 'POST',
        url: '/api/pins',
        data: {pin}
    })
)