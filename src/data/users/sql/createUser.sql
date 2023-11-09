INSERT INTO [dbo].[users]
    (
        [fullname],
        [email],
        [password]
    )
VALUES 
    (
        @fullname, 
        @email, 
        @password
    )
