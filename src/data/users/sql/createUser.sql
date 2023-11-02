INSERT INTO [dbo].[users]
    (
        [role_id],
        [fullname],
        [gender],
        [email],
        [phone_num],
        [address],
        [passwork],
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
        @passwork, 
        @deleted
    )

SELECT * FROM [dbo].[users]
WHERE [id]=id