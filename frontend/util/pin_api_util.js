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

export const createPin = pinFormData => (
    $.ajax({
        method: 'POST',
        url: '/api/pins',
        data: pinFormData,
        contentType: false,
        processData: false
    })
)

export const updatePin = pin => (
    $.ajax({
        method: 'PATCH',
        url: `/api/pins/${pin.id}`,
        data: {pin}
    })
)

export const deletePin = pinId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/pins/${pinId}`
    })
)