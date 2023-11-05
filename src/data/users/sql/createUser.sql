INSERT INTO [dbo].[users]
    (
        [role_id],
        [fullname],
        [gender],
        [email],
        [phone_num],
        [address],
        [password],
        [deleted]
    )
VALUES 
    (
        @role_id, 
        @fullname, 
        @gender, 
        @email, 
        @phone_num, 
        @address, 
        @password, 
        @deleted
    )

SELECT * FROM [dbo].[users]
WHERE [id]=id