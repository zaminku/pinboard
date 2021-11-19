export const users = () => (
    $.ajax({
        method: 'GET',
        url: '/api/users'
    })
)