UPDATE [dbo].[users]
SET [role_id] = 1
WHERE [id]=@id

SELECT * FROM [dbo].[users] WHERE [id]=@id

