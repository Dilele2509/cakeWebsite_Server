UPDATE [dbo].[order_details]
SET [quantity]=@quantity
WHERE [id]=@id

SELECT * FROM [dbo].[order_details]
WHERE [id]=@id