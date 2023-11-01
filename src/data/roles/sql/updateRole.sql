UPDATE [dbo].[roles]
SET [role_name]=@role_name
WHERE [id]=@id

SELECT * FROM [dbo].[roles]
WHERE [id]=@id