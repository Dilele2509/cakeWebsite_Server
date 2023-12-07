UPDATE [dbo].[users]
SET [password] = @password
WHERE [email] = @email

SELECT * FROM [dbo].[users]
WHERE [email]=@email