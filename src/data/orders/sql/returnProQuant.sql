UPDATE [dbo].[products]
SET [quantity] = [quantity] + @returnQuant
WHERE [id] = @id

SELECT [quantity]
FROM [dbo].[products] 
WHERE [id] = @id