INSERT INTO [dbo].[users]
    (
        [role_id],
        [fullname],
        [email],
        [password]
    )
VALUES 
    (
        @role_id,
        @fullname, 
        @email, 
        @password
    )
