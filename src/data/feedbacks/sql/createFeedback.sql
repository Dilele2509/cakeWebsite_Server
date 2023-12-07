INSERT INTO [dbo].[feedbacks]
    (
        [product_id],
        [user_id],
        [note]
    )
VALUES 
    (
        @product_id,
        @user_id,
        @note
    )

SELECT * FROM [dbo].[feedbacks]
WHERE [id]=id